import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = '{"url": "https://example.com","zip": 12345,"pollingRate": 5000,"nightMode": true,"nightModeStart": "22:00","nightModeEnd": "06:00","nightModeSpeed": 50,"ignoreWindow": false}';
const initialValue = browser ? window.localStorage.getItem('settings') ?? defaultValue : defaultValue;

const settings = writable<string>(initialValue);

settings.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('settings', value);
    }
});

export default settings;