import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '~atoms/button/Button';

import styles from './OfflineMessage.module.scss';

export const OfflineMessage: React.FC<{ onOkClick: () => void }> = ({
	onOkClick,
}) => {
	const { t } = useTranslation('content');

	return (
		<div className={styles.wrapper}>
			<h1>{t('no_internet_connection')}</h1>
			<h4>{t('check_your_internet_connection')}</h4>
			<Button className={styles.okButton} onClick={onOkClick}>
				{t('okay')}
			</Button>
		</div>
	);
};
