import React from 'react';
import cn from 'classnames';

import { useTheme } from '~theme/ThemeProvider';

import styles from './ThemeSwitch.module.scss';

export const ThemeSwitch: React.FC<{ className?: string }> = ({
	className,
}) => {
	const { currentTheme, toggleTheme } = useTheme();

	return (
		<label
			htmlFor="themeSwitcher"
			onChange={toggleTheme}
			className={cn(styles.themeSwitch, className)}
		>
			<div data-theme={currentTheme}>
				<input id="themeSwitcher" name="Change theme" type="checkbox" />
			</div>
		</label>
	);
};
