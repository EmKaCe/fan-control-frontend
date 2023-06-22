export interface SettingsData {
    url: string,
    pollingRateSensorOutside: number,
    pollingRateSensorInside: number,
    pollingRateWeb: number,
    ignoreWindow: boolean,
    darkMode: boolean,
    zipCode: string,
    hysteresisOffset: number,
    nightModeConfig: {
        enabled: boolean,
        startHour: number,
        endHour: number,
        maxDutyCycle: number
    }
}