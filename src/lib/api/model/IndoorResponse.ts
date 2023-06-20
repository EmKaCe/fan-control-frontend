export interface IndoorResponse {
    "data": [
        {
            "date": string,
            "temperature": number,
            "relativeHumidity": number,
            "absoluteHumidity": number,
            "windowOpen": boolean
        }
    ]
}