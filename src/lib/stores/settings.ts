import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = '{"url": "", "config": {"nightModeConfig":{}}}';
const initialValue = browser ? window.localStorage.getItem('settings') ?? defaultValue : defaultValue;

const settings = writable<string>(initialValue);

settings.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('settings', value);
    }
});

export default settings;