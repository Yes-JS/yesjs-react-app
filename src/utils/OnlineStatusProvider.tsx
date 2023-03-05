import React, {ReactElement, useEffect, useState} from 'react';

export const OnlineStatusContext = React.createContext(window.navigator.onLine);

const OnlineStatusProvider: React.FC<{children: ReactElement}> = ({ children }) => {
	const [onlineStatus, setOnlineStatus] = useState<boolean>(
		window.navigator.onLine
	);

	useEffect(() => {
		window.addEventListener('offline', () => {
			setOnlineStatus(false);
		});
		window.addEventListener('online', () => {
			setOnlineStatus(true);
		});

		return () => {
			window.removeEventListener('offline', () => {
				setOnlineStatus(false);
			});
			window.removeEventListener('online', () => {
				setOnlineStatus(true);
			});
		};
	}, []);

	return (
		<OnlineStatusContext.Provider value={onlineStatus}>
			{children}
		</OnlineStatusContext.Provider>
	);
};

export default OnlineStatusProvider;
