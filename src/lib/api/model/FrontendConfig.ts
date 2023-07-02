export interface FrontEndConfig {
    pollingRateSensorOutside: number,
    pollingRateSensorInside: number,
    pollingRateWeb: number,
    ignoreWindow: boolean,
    zipCode: number,
    hysteresisOffset: number,
    nightModeConfig: {
        startHour: number,
        endHour: number,
        maxDutyCycle: number
    }
};