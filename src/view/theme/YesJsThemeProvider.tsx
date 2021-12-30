import React, { createContext, useContext, useEffect, useState } from 'react';
import cn from 'classnames';

import themeStyles from './Theme.module.scss';

interface ThemeContext {
	currentTheme: string;
	toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContext>({
	currentTheme: 'dark',
	toggleTheme: () => undefined,
});

export const YesJsThemeProvider: React.FC<
	React.HTMLAttributes<HTMLDivElement>
> = ({ children, className, ...props }) => {
	const systemIsDark = window.matchMedia('(prefers-color-scheme: dark').matches;
	const systemThemeMode = systemIsDark ? 'dark' : 'light';
	const storedTheme = JSON.parse(
		String(localStorage.getItem('yesjsThemeSettings'))
	);
	const shouldApplyStoredTheme =
		(new Date().getTime() - storedTheme?.themeSettingUpTime) / 1000 / 60 / 60 <
		12;
	const defaultTheme =
		storedTheme && shouldApplyStoredTheme
			? storedTheme.themeMode
			: systemThemeMode;

	const [themeName, setThemeName] = useState(defaultTheme);

	useEffect(() => {
		const changeTheme = (e: MediaQueryListEvent) => {
			setThemeName(e.matches ? 'dark' : 'light');
		};

		window
			.matchMedia('(prefers-color-scheme: dark')
			.addEventListener('change', changeTheme);

		return () => {
			window
				.matchMedia('(prefers-color-scheme: dark')
				.removeEventListener('change', changeTheme);
		};
	}, []);

	const toggleTheme = () => {
		localStorage.setItem(
			'yesjsThemeSettings',
			JSON.stringify({
				themeMode: themeName === 'dark' ? 'light' : 'dark',
				themeSettingUpTime: new Date().getTime(),
			})
		);
		setThemeName(themeName === 'dark' ? 'light' : 'dark');
	};

	const contextValue = {
		currentTheme: themeName,
		toggleTheme: toggleTheme,
	};

	return (
		<ThemeContext.Provider value={contextValue}>
			<div
				className={cn(themeStyles.common, themeStyles[themeName], className)}
				{...props}
			>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const store = useContext(ThemeContext);
	return store;
};
