import { Request } from "express";
import { x64 } from "murmurhash3js";
import uniqueParams from "src/helpers/uniqueParams";
import {
  AcceptHeader,
  FingerPrint,
  IpAddress,
  Parameters,
  UserAgent,
} from "src/type";
import * as ua from "useragent";
/**
 * Generate a fingerprint for the given request and parameters.
 *
 * @param {Request} req - The request object.
 * @param {Parameters[]} params - An array of parameters.
 * @return {object} - An object containing the generated fingerprint.
 */
export default function generateFingerprint(
  req: Request,
  params: Parameters[]
): FingerPrint {
  params = uniqueParams(params);
  const object = params.reduce((ojb, param) => {
    ojb[param] = paramHandler[param](req);
    return ojb;
  }, {});
  const id = x64.hash128(JSON.stringify(object));
  return {
    id,
    ...object,
  } as FingerPrint;
}

const paramHandler = {
  /**
   * Extracts the accept and language headers from the request headers.
   *
   * @param {Request} req - the request object containing headers
   * @return {AcceptHeader} - an object with the accept and language headers
   */
  headers: (req: Request): AcceptHeader => {
    const { headers } = req;
    return {
      accept: headers["accept"],
      language: headers["accept-language"],
    };
  },
  /**
   * Retrieves the IP address from the request object.
   *
   * @param {Request} req - The HTTP request object.
   * @return {IpAddress} The IP address value.
   */
  ipAddress: (req: Request): IpAddress => {
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

  /**
   * Returns the user agent information parsed from the request headers.
   *
   * @param {Request} req - The request object.
   * @return {Object} The user agent information.
   */
  userAgent: (req: Request): UserAgent => {
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
