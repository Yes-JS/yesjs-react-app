import React, { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Main from '~layouts/mainLayout/Main';
import LazyRoute from '~routes/LazyRoute';

const InstallScreen = lazy(
	() => import(/*webpackChunkName: "Install"*/ '~pages/install/Install')
);
const ParticipateScreen = lazy(
	() =>
		import(/*webpackChunkName: "Participate"*/ '~pages/participate/Participate')
);

const AppRoutes: React.FunctionComponent = () => (
	<React.Suspense fallback={null}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />}>
					<Route
						path="install"
						element={
							<LazyRoute>
								<InstallScreen />
							</LazyRoute>
						}
					/>
					<Route
						path="participate"
						element={
							<LazyRoute>
								<ParticipateScreen />
							</LazyRoute>
						}
					/>
					<Route path="*" element={<Navigate to="/install" />} />
				</Route>

				<Route index element={<Navigate to="/install" />} />
			</Routes>
		</BrowserRouter>
	</React.Suspense>
);

export default AppRoutes;
