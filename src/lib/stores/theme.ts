import { browser } from '$app/environment';
import { writable } from 'svelte/store';


const defaultValue = 'light';
const initialValue = browser ? window.localStorage.getItem('color-theme') ?? defaultValue : defaultValue;

const theme = writable<string>(initialValue);

theme.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('color-theme', value);
    }
});

export default theme;