import type { AxiosInstance } from "axios";
import axios from "axios";
import type { FrontEndConfig } from "./model/FrontendConfig";
import type { IndoorData } from "./model/IndoorData";
import type { OutdoorData } from "./model/OutdoorData";

export class ApiClient {
    private client: AxiosInstance;

    constructor(url: string) {
        this.client = axios.create({
            baseURL: `http://${url}`, // TODO: Change this to only support HTTPs
            timeout: 5000
        });
    }

    public async getConfig(): Promise<FrontEndConfig> {
        return (await this.client.get("/frontend/config")).data;
    }

    public async setConfig(data: FrontEndConfig): Promise<FrontEndConfig> {
        return (await this.client.post("/frontend/config")).data;
    }

    public async getIndoorData(): Promise<IndoorData> {
        return (await this.client.get("/indoor")).data;
    }

    public async getOutdoorData(): Promise<OutdoorData> {
        return (await this.client.get("/outdoor")).data;
    }
} 