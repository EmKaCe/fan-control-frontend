export interface StateResponse {
    fanDutyCycle: number,
    windowOpen: boolean,
    nightModeConfig: {
        maxDutyCycle: number,
        startHour: number,
        endHour: number
    }
}