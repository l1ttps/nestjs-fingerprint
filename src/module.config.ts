export interface ModuleConfigs {
  params?: Parameters[];
}

export const defaultModuleConfigs: ModuleConfigs = {
  params: ["geoIp", "headers", "userAgent"],
};

export type Parameters = "headers" | "userAgent" | "geoIp";
