// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.

import { clientsClaim, setCacheNameDetails } from 'workbox-core';
import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

setCacheNameDetails({
	prefix: process.env.APP_NAME,
	suffix: '',
	precache: 'precache',
	runtime: 'runtime',
});

self.__WB_DISABLE_DEV_LOGS = String(process.env.REACT_APP_STAND) !== 'dev';

// This clientsClaim() should be at the top level
// of your service worker, not inside of, e.g.,
// an event handler.
clientsClaim();

/**
 * We are not wrapping it in a 'message' event as per the new update.
 * @see https://developers.google.com/web/tools/workbox/modules/workbox-core
 */
self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

const handler = createHandlerBoundToURL('/index.html');
const navigationRoute = new NavigationRoute(handler, {
	allowlist: [new RegExp(/\/[a-z/]*/)],
});
registerRoute(navigationRoute);

registerRoute(
	({ url }) => {
		return url.origin === 'my//api.url';
	},
	new StaleWhileRevalidate({
		cacheName: `${process.env.APP_NAME}-api-responses`,
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
			new ExpirationPlugin({
				maxEntries: 100,
				maxAgeSeconds: 90000,
			}),
		],
	})
);

registerRoute(
	({ url }) => {
		return url.pathname.endsWith('.png') || url.pathname.endsWith('.jpg');
	},
	new CacheFirst({
		cacheName: `${process.env.APP_NAME}-cached-images`,
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
			new ExpirationPlugin({
				maxEntries: 100,
				maxAgeSeconds: 90000,
			}),
		],
	})
);
