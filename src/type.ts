export interface ModuleConfigs {
  params?: Parameters[];
  cookieOptions?: {
    name?: string;
    httpOnly?: boolean;
    domain?: string;
  };
}

export const defaultModuleConfigs: ModuleConfigs = {
  params: ["ipAddress", "headers", "userAgent"],
  cookieOptions: {
    name: "fp",
    httpOnly: true,
  },
};

export type Parameters = "headers" | "userAgent" | "ipAddress";

export interface AcceptHeader {
  accept: string;
  language: string;
  encoding: string;
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
  headers: AcceptHeader;
  userAgent: UserAgent;
  ipAddress: IpAddress;
}

export const DEFAULT_COOKIE_NAME = "fp";
