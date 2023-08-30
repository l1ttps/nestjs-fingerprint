export interface ModuleConfigs {
  params?: Parameters[];
}

export const defaultModuleConfigs: ModuleConfigs = {
  params: ["ipAddress", "headers", "userAgent"],
};

export type Parameters = "headers" | "userAgent" | "ipAddress";

export interface AcceptHeader {
  accept: string;
  language: string;
}

export interface IpAddress {
  value: string;
}

export interface UserAgent {
  browser: {
    family: string;
    version: string;
  };
  device: {
    family: string;
    version: string;
  };
  os: {
    family: string;
    major: string;
    minor: string;
  };
}

export interface IFingerprint extends AcceptHeader, UserAgent, IpAddress {
  id: string;
}
