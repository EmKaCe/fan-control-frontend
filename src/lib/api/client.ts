import axios from "axios";
import type { AxiosInstance } from "axios";
import type { FrontEndConfig } from "./model/FrontendConfig";
import type { IndoorResponse } from "./model/IndoorResponse";
import type { OutdoorResponse } from "./model/OutdoorResponse";
import type { WeatherResponse } from "./model/weather/WeatherResponse";
import type { StateResponse } from "./model/StateResponse";

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
        ApiClient.instance = new ApiClient(url);
    }

    public async getConfig(): Promise<FrontEndConfig> {
        return (await this.client.get("/frontend/config")).data;
    }

    public async setConfig(data: FrontEndConfig): Promise<FrontEndConfig> {
        return (await (await this.client.post("/frontend/config", data)).data);
    }

    public async getIndoor(): Promise<IndoorResponse> {
        return (await this.client.get("/indoor")).data;
    }

    public async getOutdoor(): Promise<OutdoorResponse> {
        return (await this.client.get("/outdoor")).data;
    }

    public async getState(): Promise<StateResponse> {
        return (await this.client.get("/state")).data;
    }

    public async getWeather(): Promise<WeatherResponse> {
        return (await this.client.get("/weather")).data;
    }
} 