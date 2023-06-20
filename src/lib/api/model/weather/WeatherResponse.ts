import type { ForecastData } from './ForecastData';
import type { WeatherData } from './WeatherData';
/**
 * 
 * @export
 * @interface WeatherResponse
 */

export interface WeatherResponse {
    /**
     * 
     * @type {WeatherData}
     * @memberof WeatherResponse
     */
    current: WeatherData;
    /**
     * 
     * @type {ForecastData}
     * @memberof WeatherResponse
     */
    forecast: ForecastData;
};