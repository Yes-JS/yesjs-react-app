import React from 'react';

import { YesJsThemeProvider } from '~theme';
import OnlineStatusProvider from '~utils/OnlineStatusProvider';
import CrashMessage from '~molecules/crashMessage/CrashMessage';
import ErrorBoundary from '~molecules/errorBoundary/errorBoundary';
import AppRoutes from '~routes/AppRouter';

const ViewEntrypoint: React.FunctionComponent = () => {
	return (
		<OnlineStatusProvider>
			<YesJsThemeProvider>
				<ErrorBoundary errorScreen={<CrashMessage />}>
					<AppRoutes />
				</ErrorBoundary>
			</YesJsThemeProvider>
		</OnlineStatusProvider>
	);
};

export default ViewEntrypoint;
