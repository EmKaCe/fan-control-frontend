import type { City } from './City';
import type { WeatherItem } from './WeatherItem';
/**
 * 
 * @export
 * @interface ForecastData
 */
export interface ForecastData {
    /**
     * 
     * @type {string}
     * @memberof ForecastData
     */
    cod?: string;
    /**
     * 
     * @type {number}
     * @memberof ForecastData
     */
    message?: number;
    /**
     * 
     * @type {number}
     * @memberof ForecastData
     */
    cnt?: number;
    /**
     * 
     * @type {Array<WeatherItem>}
     * @memberof ForecastData
     */
    list: Array<WeatherItem>;
    /**
     * 
     * @type {City}
     * @memberof ForecastData
     */
    city?: City;
}
