import type { Clouds } from './Clouds';
import type { ForecastSys } from './ForecastSys';
import type { Rain } from './Rain';
import type { Weather } from './Weather';
import type { WeatherMain } from './WeatherMain';
import type { Wind } from './Wind';
/**
 * 
 * @export
 * @interface WeatherItem
 */
export interface WeatherItem {
    /**
     * 
     * @type {number}
     * @memberof WeatherItem
     */
    dt: number;
    /**
     * 
     * @type {WeatherMain}
     * @memberof WeatherItem
     */
    main: WeatherMain;
    /**
     * 
     * @type {Array<Weather>}
     * @memberof WeatherItem
     */
    weather: Array<Weather>;
    /**
     * 
     * @type {Clouds}
     * @memberof WeatherItem
     */
    clouds?: Clouds;
    /**
     * 
     * @type {Wind}
     * @memberof WeatherItem
     */
    wind?: Wind;
    /**
     * 
     * @type {number}
     * @memberof WeatherItem
     */
    visibility?: number;
    /**
     * 
     * @type {number}
     * @memberof WeatherItem
     */
    pop?: number;
    /**
     * 
     * @type {Rain}
     * @memberof WeatherItem
     */
    rain?: Rain | null;
    /**
     * 
     * @type {ForecastSys}
     * @memberof WeatherItem
     */
    sys?: ForecastSys;
    /**
     * 
     * @type {string}
     * @memberof WeatherItem
     */
    dtTxt?: string;
}
