import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '~atoms/button/Button';

import styles from './CrashMessage.module.scss';

interface ICrash {
	click?: (r: string) => void;
}

const CrashMessage: React.FunctionComponent<ICrash> = ({ click }) => {
	const { t } = useTranslation('content');

	return (
		<div className={styles.wrapper}>
			<h1>{t('crash_message')}</h1>
			<Button
				className={styles.okButton}
				onClick={() => click && click('/install')}
			>
				{t('return')}
			</Button>
		</div>
	);
};

export default CrashMessage;
