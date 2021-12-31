import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Participate.module.scss';

const Participate = () => {
	const { t } = useTranslation('content');

	return (
		<div className={styles.wrapper}>
			<span className={styles.title}>{t('participate_title')}</span>
			<span className={styles.subtitle}>
				{`${t('participate_subtitle_first')}`}
				&nbsp;
				<a href={process.env.APP_ISSUE_LINK} target="_blank" rel="noreferrer">
					{`${t('create_an_issue')}`}
				</a>
				&nbsp;
				{`${t('or_even')}`}
				&nbsp;
				<a
					href={process.env.APP_PULL_REQUEST_LINK}
					target="_blank"
					rel="noreferrer"
				>
					{`${t('make_pull_request')}`}
				</a>
				&nbsp;
				{`${t('participate_subtitle_second')}`}
			</span>
		</div>
	);
};

export default Participate;
