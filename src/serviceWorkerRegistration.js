import { Workbox } from 'workbox-window';

export const registerServiceWorker = () => {
	if ('serviceWorker' in navigator) {
		const wb = new Workbox('/sw.js');

		wb.addEventListener('installed', (e) => {
			if (e.isUpdate) {
				window.location.reload();
			}
		});
		wb.register()
			.then((registration) => {
				console.log('SW registered: ', registration);
			})
			.catch((registrationError) => {
				console.log('SW registration failed: ', registrationError);
			});
	}
};

export const unregisterServiceWorker = () => {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.getRegistrations().then(function (registrations) {
			for (let registration of registrations) {
				registration.unregister();
			}
		});
	}
};
