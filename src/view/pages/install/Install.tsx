import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CopyIcon, SuccessIcon } from '~icons';
import Button from '~atoms/button/Button';

import styles from './Install.module.scss';

const Install = () => {
	const { t } = useTranslation('content');

	const [isCopied, setIsCopied] = useState(false);

	const command =
		'npx degit https://github.com/evgeny-kirichuk/yesjs-react-app my-app';

	const copyCommand = () => {
		navigator.clipboard.writeText(command).then(
			function () {
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 2000);
			},
			() => {
				console.log('copy failed');
			}
		);
	};

	return (
		<div className={styles.wrapper}>
			<span className={styles.title}>{`${t('install_title')}`}</span>
			<span className={styles.subtitle}>
				<a
					href={process.env.APP_REPOSITORY_LINK}
					target="_blank"
					rel="noreferrer"
				>
					{process.env.APP_NAME}
				</a>
				&nbsp;
				{`${t('install_subtitle')}`}
			</span>

			<Button
				aria-label={
					isCopied
						? (t('aria_label.command_copied') as string)
						: (t('aria_label.copy_install') as string)
				}
				className={styles.commandWrapper}
				onClick={copyCommand}
			>
				<pre>
					<code>{command}</code>
				</pre>
				{isCopied ? (
					<SuccessIcon className={styles.copiedIcon} />
				) : (
					<CopyIcon className={styles.copyIcon} />
				)}
			</Button>
		</div>
	);
};

export default Install;
