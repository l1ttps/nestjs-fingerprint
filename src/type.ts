export interface ModuleConfigs {
  params?: Parameters[];
  cookieOptions?: {
    name?: string;
    isSetCookie: boolean;
    httpOnly?: boolean;
    domain?: string;
  };
}

export const defaultModuleConfigs: ModuleConfigs = {
  params: ["ipAddress", "headers", "userAgent"],
  cookieOptions: {
    isSetCookie: true,
    name: "fp",
    httpOnly: true,
  },
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

export const DEFAULT_COOKIE_NAME = "fp";
