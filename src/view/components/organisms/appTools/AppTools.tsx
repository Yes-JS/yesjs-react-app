import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cn from 'classnames';

import Button from '~atoms/button/Button';
import Navigation from '~organisms/navigation/Navigation';
import CrashMessage from '~molecules/crashMessage/CrashMessage';
import ErrorBoundary from '~organisms/errorBoundary/errorBoundary';

import styles from './AppTools.module.scss';

const AppTools = () => {
	const { t } = useTranslation('content');
	const [crashed, setCrashed] = useState(false);
	const lang = i18next.language;

	const Crash = () => {
		throw new Error('Boom!');
	};

	return (
		<div className={styles.wrapper}>
			<ErrorBoundary
				onRecovery={() => setCrashed(false)}
				errorScreen={<CrashMessage />}
			>
				<>
					<div className={styles.routes}>
						<span>{t('tools.routing_title')}</span>
						<Navigation className={styles.marginTop8} />
					</div>
					<div className={styles.crash}>
						<span>{t('tools.crash_title')}</span>
						<Button
							onClick={() => setCrashed(true)}
							className={cn(styles.marginTop8, styles.crashButton)}
						>
							{t('tools.crash_button_text')}
						</Button>
						{crashed && <Crash />}
					</div>
					<div className={styles.lang}>
						<span>{t('tools.internationalization_title')}</span>
						<Button
							aria-label={t('aria_label.change_language_to_ru') as string}
							onClick={() => i18next.changeLanguage('ru')}
							className={cn(styles.marginTop8, styles.leftButton, {
								[styles.active]: lang === 'ru',
							})}
						>
							{t('tools.internationalization_ru')}
						</Button>
						<Button
							aria-label={t('aria_label.change_language_to_eng') as string}
							onClick={() => i18next.changeLanguage('en')}
							className={cn(styles.marginTop8, styles.rightButton, {
								[styles.active]: lang === 'en',
							})}
						>
							{t('tools.internationalization_eng')}
						</Button>
					</div>
					<span>{t('tools.pwa_title')}</span>
					<span>{t('tools.theming_title')}</span>
					<span>{t('tools.internet_connection_handler')}</span>
					<span>
						<a
							href={process.env.APP_ARTICLE_LINK}
							target="_blank"
							rel="noreferrer"
						>
							{t('tools.read_more')}
						</a>
					</span>
				</>
			</ErrorBoundary>
		</div>
	);
};

export default AppTools;
