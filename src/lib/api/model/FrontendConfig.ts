export interface FrontEndConfig {
    "pollingRateSensorOutside": number,
    "pollingRateSensorInside": number,
    "pollingRateWeb": number,
    "ignoreWindow": boolean,
    "darkMode": boolean,
    "zipCode": string,
    "hysteresisOffset": number,
    "nightModeConfig": {
        "startHour": number,
        "endHour": number,
        "maxDutyCycle": number
    }
};