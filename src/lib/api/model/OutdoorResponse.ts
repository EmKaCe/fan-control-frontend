export interface OutdoorResponse {
    "data": [
        {
            "date": string,
            "temperature": number,
            "relativeHumidity": number,
            "absoluteHumidity": number,
            "battery": number,
        }
    ]
}