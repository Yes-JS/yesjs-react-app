import React from 'react';

import { ThemeSwitch } from '~molecules/themeSwitch/ThemeSwitch';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
	return (
		<header className={styles.headerWrapper}>
			<div className={styles.headerItems}>
				<a className={styles.logoLink} href=".">
					<span className={styles.y}>Y</span>
					<span className={styles.js}>JS</span>
				</a>
				<ThemeSwitch className={styles.switchStyle} />
			</div>
		</header>
	);
};
