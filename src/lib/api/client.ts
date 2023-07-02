import axios from "axios";
import type { AxiosInstance } from "axios";
import type { FrontEndConfig } from "./model/FrontendConfig";
import type { IndoorResponse } from "./model/IndoorResponse";
import type { OutdoorResponse } from "./model/OutdoorResponse";
import type { WeatherResponse } from "./model/weather/WeatherResponse";
import type { StateResponse } from "./model/StateResponse";
import { AxiosError } from "axios";
import type { SettingsData } from "$lib/stores/model/SettingsData";

export class ApiClient {
    private static instance: ApiClient;
    private client: AxiosInstance;

    private constructor(url: string) {
        this.client = axios.create({
            baseURL: `https://${url.replace("http://", "").replace("https://", "")}`,
            timeout: 5000,
        });
    }

    public static getClient(url?: string): ApiClient {
        if (url != undefined && ApiClient.instance == undefined) {
            ApiClient.instance = new ApiClient(url);
        }
        return ApiClient.instance;
    }

    public static setUrl(url: string): void {
        if (!url) throw new AxiosError("No url provided");
        ApiClient.instance = new ApiClient(url);
    }

    public async getConfig(): Promise<FrontEndConfig> {
        return (await this.client.get("/frontend/config")).data;
    }

    public async setConfig(data: SettingsData): Promise<FrontEndConfig> {
        if (
            data.config.pollingRateWeb == undefined ||
            data.config.ignoreWindow == undefined ||
            data.config.zipCode == undefined ||
            data.config.hysteresisOffset == undefined
        ) throw new AxiosError("Bitte fülle alle Felder aus");

        if (!data.config.nightModeConfig.startHour || !data.config.nightModeConfig.endHour) {
            data.config.nightModeConfig = {
                startHour: null,
                endHour: null,
                maxDutyCycle: null,
            };
        }

        if (!data.config.pollingRateSensorInside) {
            data.config.pollingRateSensorInside = null;
        }

        if (!data.config.pollingRateSensorOutside) {
            data.config.pollingRateSensorOutside = null;
        }

        return (await (await this.client.post("/frontend/config", data.config)).data);
    }

    public async getHistoricIndoor(limit: number): Promise<IndoorResponse[]> {
        return (await this.client.get(`/indoor?limit=${limit}`)).data.data;
    }

    public async getHistoricOutdoor(limit: number): Promise<OutdoorResponse[]> {
        return (await this.client.get(`/outdoor?limit=${limit}`)).data.data;
    }

    public async getIndoor(): Promise<IndoorResponse> {
        return (await this.client.get("/indoor?limit=1")).data.data[0];
    }

    public async getOutdoor(): Promise<OutdoorResponse> {
        return (await this.client.get("/outdoor?limit=1")).data.data[0];
    }

    public async getState(): Promise<StateResponse> {
        return (await this.client.get("/state")).data;
    }

    public async getWeather(): Promise<WeatherResponse> {
        return (await this.client.get("/weather")).data;
    }
} 