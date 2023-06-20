import type { Clouds } from './Clouds';
import type { Coord } from './Coord';
import type { Rain } from './Rain';
import type { Weather } from './Weather';
import type { WeatherMain } from './WeatherMain';
import type { WeatherSys } from './WeatherSys';
import type { Wind } from './Wind';
/**
 * 
 * @export
 * @interface WeatherData
 */
export interface WeatherData {
    /**
     * 
     * @type {Coord}
     * @memberof WeatherData
     */
    coord?: Coord;
    /**
     * 
     * @type {Array<Weather>}
     * @memberof WeatherData
     */
    weather?: Array<Weather>;
    /**
     * 
     * @type {string}
     * @memberof WeatherData
     */
    base?: string;
    /**
     * 
     * @type {WeatherMain}
     * @memberof WeatherData
     */
    main?: WeatherMain;
    /**
     * 
     * @type {number}
     * @memberof WeatherData
     */
    visibility?: number;
    /**
     * 
     * @type {Wind}
     * @memberof WeatherData
     */
    wind?: Wind;
    /**
     * 
     * @type {Rain}
     * @memberof WeatherData
     */
    rain?: Rain;
    /**
     * 
     * @type {Clouds}
     * @memberof WeatherData
     */
    clouds?: Clouds;
    /**
     * 
     * @type {number}
     * @memberof WeatherData
     */
    dt?: number;
    /**
     * 
     * @type {WeatherSys}
     * @memberof WeatherData
     */
    sys?: WeatherSys;
    /**
     * 
     * @type {number}
     * @memberof WeatherData
     */
    timezone?: number;
    /**
     * 
     * @type {number}
     * @memberof WeatherData
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof WeatherData
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof WeatherData
     */
    cod?: number;
}
