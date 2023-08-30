import { Request } from "express";
import uniqueParams from "src/helpers/uniqueParams";
import { Parameters } from "src/module.config";
import * as ua from "useragent";
export default function generateFingerprint(
  req: Request,
  params: Parameters[]
) {
  params = uniqueParams(params);
  const object = params.reduce((ojb, param) => {
    ojb[param] = paramHandler[param](req);
    return ojb;
  }, {});
  return params;
}

const paramHandler = {
  headers: (req: Request) => {
    const { headers } = req;
    return {
      accept: headers["accept"],
      language: headers["accept-language"],
    };
  },
  ipAddress: (req: Request) => {
    const ip =
      (req.headers["x-forwarded-for"] || "").split(",").pop() ||
      req.connection?.remoteAddress ||
      req.socket?.remoteAddress ||
      req.connection?.socket?.remoteAddress ||
      req.ip;
    return {
      value: ip,
    };
  },

  userAgent: (req: Request) => {
    const agent = ua.parse(req.headers["user-agent"]);
    return {
      browser: {
        family: agent.family,
        version: agent.major,
      },
      device: {
        family: agent.device.family,
        version: agent.device.major,
      },
      os: {
        family: agent.os.family,
        major: agent.os.major,
        minor: agent.os.minor,
      },
    };
  },
};
