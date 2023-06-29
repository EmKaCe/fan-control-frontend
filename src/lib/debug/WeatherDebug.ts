export default {
    current: {
        coord: {
            lon: 13.3873,
            lat: 52.5161
        },
        weather: [
            {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d'
            }
        ],
        base: 'stations',
        main: {
            temp: 17.95,
            feelsLike: 17.6,
            tempMin: 15.61,
            tempMax: 19.99,
            pressure: 1003,
            humidity: 69,
            seaLevel: 0,
            grndLevel: 0
        },
        visibility: 10000,
        wind: {
            speed: 4.47,
            deg: 290,
            gust: 0.0
        },
        rain: null,
        clouds: {
            all: 0
        },
        dt: 1687889415,
        sys: {
            type: 2,
            id: 2009543,
            country: 'DE',
            sunrise: 1687833907,
            sunset: 1687894411
        },
        timezone: 7200,
        id: 0,
        name: 'Berlin',
        cod: 200
    },
    forecast: {
        cod: '200',
        message: 0,
        cnt: 3,
        list: [
            {
                dt: 1687899600,
                main: {
                    temp: 16.8,
                    feelsLike: 16.47,
                    tempMin: 14.49,
                    tempMax: 16.8,
                    pressure: 1007,
                    humidity: 74,
                    seaLevel: 1007,
                    grndLevel: 1010
                },
                weather: [
                    {
                        id: 500,
                        main: 'Rain',
                        description: 'light rain',
                        icon: '10n'
                    }
                ],
                clouds: {
                    all: 24
                },
                wind: {
                    speed: 3.67,
                    deg: 289,
                    gust: 10.73
                },
                visibility: 10000,
                pop: 0.65,
                rain: {
                    _1h: 0.0
                },
                sys: {
                    pod: 'n'
                },
                dtTxt: '2023-06-27 21:00:00'
            },
            {
                dt: 1687910400,
                main: {
                    temp: 14.66,
                    feelsLike: 14.3,
                    tempMin: 13.01,
                    tempMax: 14.66,
                    pressure: 1011,
                    humidity: 81,
                    seaLevel: 1011,
                    grndLevel: 1010
                },
                weather: [
                    {
                        id: 802,
                        main: 'Clouds',
                        description: 'scattered clouds',
                        icon: '03n'
                    }
                ],
                clouds: {
                    all: 25
                },
                wind: {
                    speed: 4.46,
                    deg: 288,
                    gust: 11.51
                },
                visibility: 10000,
                pop: 0.51,
                rain: null,
                sys: {
                    pod: 'n'
                },
                dtTxt: '2023-06-28 00:00:00'
            },
            {
                dt: 1687921200,
                main: {
                    temp: 11.95,
                    feelsLike: 11.58,
                    tempMin: 11.95,
                    tempMax: 11.95,
                    pressure: 1015,
                    humidity: 91,
                    seaLevel: 1015,
                    grndLevel: 1010
                },
                weather: [
                    {
                        id: 802,
                        main: 'Clouds',
                        description: 'scattered clouds',
                        icon: '03d'
                    }
                ],
                clouds: {
                    all: 46
                },
                wind: {
                    speed: 4.66,
                    deg: 282,
                    gust: 11.97
                },
                visibility: 10000,
                pop: 0.0,
                rain: null,
                sys: {
                    pod: 'd'
                },
                dtTxt: '2023-06-28 03:00:00'
            }
        ],
        city: {
            id: 0,
            name: 'Berlin',
            coord: {
                lon: 13.3873,
                lat: 52.5161
            },
            country: 'DE',
            population: 0,
            timezone: 7200,
            sunrise: 1687833907,
            sunset: 1687894411
        }
    }
};