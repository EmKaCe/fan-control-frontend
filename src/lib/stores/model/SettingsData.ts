import type { FrontEndConfig } from "$lib/api/model/FrontendConfig";

export interface SettingsData {
    url: string,
    config: FrontEndConfig,
}