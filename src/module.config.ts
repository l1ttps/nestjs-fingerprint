export interface ModuleConfigs {
  params?: Parameters[];
}

export const defaultModuleConfigs: ModuleConfigs = {
  params: ["ipAddress", "headers", "userAgent"],
};

export type Parameters = "headers" | "userAgent" | "ipAddress";
