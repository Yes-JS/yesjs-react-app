import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import Tabs from '~molecules/tabs/Tabs';
import Button from '~atoms/button/Button';

import styles from './Navigation.module.scss';

const Navigation: React.FC<{ className?: string }> = ({ className }) => {
	const { t } = useTranslation('content');
	const navigate = useNavigate();
	const location = useLocation();

	const paths = [
		{
			pathname: '/install',
			pathlabel: t('tools.routing_install'),
			ariaLabel: t('aria_label.navigate_to_install'),
		},
		{
			pathname: '/participate',
			pathlabel: t('tools.routing_participate'),
			ariaLabel: t('aria_label.navigate_to_participate'),
		},
	];

	const activeTabIndex = paths.findIndex(
		(path) => location.pathname === path.pathname
	);

	const onNavButtonClick = (buttonIndex: number) => () => {
		navigate(paths[buttonIndex].pathname);
	};

	const navTabs = paths.map((path, index) => (
		<Button
			tabIndex={0}
			aria-label={path.ariaLabel}
			className={cn(styles.navButton, {
				[styles.active]: location.pathname === path.pathname,
			})}
			onClick={onNavButtonClick(index)}
			key={path.pathname}
		>
			{path.pathlabel}
		</Button>
	));

	return (
		<nav className={className}>
			<Tabs
				showIndicator={true}
				activeTabIndex={activeTabIndex}
				tabs={navTabs}
			/>
		</nav>
	);
};

export default Navigation;
