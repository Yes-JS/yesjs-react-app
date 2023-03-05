import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '~molecules/footer/Footer';
import { Header } from '~organisms/header/Header';
import AppTools from '~organisms/appTools/AppTools';
import { OnlineStatusContext } from '~utils/OnlineStatusProvider';
import Portal from '~atoms/portal/Portal';
import { OfflineMessage } from '~molecules/offlineMessage/OfflineMessage';

import styles from './Main.module.scss';

const Main: React.FC = () => {
	const online = useContext(OnlineStatusContext);
	const [showOfflineMessage, setShowOfflineMessage] = useState(!online);

	const closeOfflineMessage = () => setShowOfflineMessage(false);

	useEffect(() => {
		setShowOfflineMessage(!online);
	}, [online]);

	return (
		<div className={styles.mainWrapper}>
			<Header />
			<main className={styles.content}>
				<div className={styles.routesWrapper}>
					<Outlet />
				</div>
				<AppTools />
			</main>
			<Footer />
			<Portal display={showOfflineMessage} onWrapperClick={closeOfflineMessage}>
				<OfflineMessage onOkClick={closeOfflineMessage} />
			</Portal>
		</div>
	);
};

export default Main;
