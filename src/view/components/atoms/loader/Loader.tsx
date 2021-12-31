import React, { useEffect, useState } from 'react';

import Portal from '~atoms/portal/Portal';

import styles from './Loader.module.scss';

export const Loader: React.FC<{
	delay?: number;
	fullscreen?: boolean;
	style?: React.CSSProperties;
}> = ({ delay = 0, fullscreen = false, style }) => {
	const [showLoader, setShowLoader] = useState(delay === 0);

	useEffect(() => {
		const tId = setTimeout(() => {
			setShowLoader(true);
		}, delay);

		return () => {
			if (tId) {
				clearTimeout(tId);
			}
		};
	}, []);

	if (!showLoader) {
		return null;
	}

	return fullscreen ? (
		<Portal display>
			<div className={styles.fullscreenLoader} style={style}>
				<div className={`${styles.dot} ${styles.firstDot}`} />
				<div className={`${styles.dot} ${styles.secondDot}`} />
				<div className={`${styles.dot} ${styles.thirdDot}`} />
			</div>
		</Portal>
	) : (
		<div className={styles.contentLoader} style={style} />
	);
};
