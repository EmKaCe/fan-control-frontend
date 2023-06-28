import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { SettingsData } from './model/SettingsData';

const defaultValue: SettingsData = {
    url: 'http://example.com',
    config: {
        pollingRateSensorOutside: 5000,
        pollingRateSensorInside: 5000,
        pollingRateWeb: 5000,
        ignoreWindow: false,
        darkMode: false,
        zipCode: '12345',
        hysteresisOffset: 0.5,
        nightModeConfig: {
            startHour: 22,
            endHour: 6,
            maxDutyCycle: 100,
        },
    },
};

const initialValue = browser ? window.localStorage.getItem('settings') ?? JSON.stringify(defaultValue) : JSON.stringify(defaultValue);

const settings = writable<string>(initialValue);

settings.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('settings', value);
    }
});

export default settings;