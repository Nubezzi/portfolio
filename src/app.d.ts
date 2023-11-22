// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('en-US', () => import('./en-US.json'));
register('pt', () => import('./pt.json'));
// en, en-US and pt are not available yet

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});