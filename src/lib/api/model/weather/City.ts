import type { Coord } from './Coord';
/**
 * 
 * @export
 * @interface City
 */
export interface City {
    /**
     * 
     * @type {number}
     * @memberof City
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof City
     */
    name?: string;
    /**
     * 
     * @type {Coord}
     * @memberof City
     */
    coord?: Coord;
    /**
     * 
     * @type {string}
     * @memberof City
     */
    country?: string;
    /**
     * 
     * @type {number}
     * @memberof City
     */
    population?: number;
    /**
     * 
     * @type {number}
     * @memberof City
     */
    timezone?: number;
    /**
     * 
     * @type {number}
     * @memberof City
     */
    sunrise?: number;
    /**
     * 
     * @type {number}
     * @memberof City
     */
    sunset?: number;
}
