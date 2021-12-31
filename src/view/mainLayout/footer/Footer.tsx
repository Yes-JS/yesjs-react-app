import React from 'react';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
	return (
		<footer className={styles.footerWrapper}>
			<span className={styles.author}>
				<a href={process.env.APP_AUTHOR_LINK} target="_blank" rel="noreferrer">
					{process.env.APP_AUTHOR}
				</a>
				&nbsp; &copy; &nbsp;
				{new Date().getFullYear()}
			</span>
			<span className={styles.version}>v{process.env.APP_VERSION}</span>
		</footer>
	);
};

export default Footer;
