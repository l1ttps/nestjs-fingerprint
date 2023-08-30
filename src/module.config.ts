export interface ModuleConfigs {
  headers?: boolean;
  userAgent?: boolean;
  geoIp?: boolean;
}

export const defaultModuleConfigs: ModuleConfigs = {
  headers: true,
  userAgent: true,
  geoIp: true,
};
