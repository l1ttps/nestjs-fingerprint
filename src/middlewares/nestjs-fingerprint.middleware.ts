import { Injectable, NestMiddleware, Type, mixin } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import generateFingerprint from "../core/generateFingerprint";
import { DEFAULT_COOKIE_NAME, ModuleConfigs } from "../type";

export function NestjsFingerprintMiddleware(
  options: ModuleConfigs
): Type<NestMiddleware> {
  @Injectable()
  class Middleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
      const { params } = options;
      const { name, httpOnly, domain } = options.cookieOptions || {};

      const fp = generateFingerprint(req, params);

      req.fp = fp;

      const cookieName = name || DEFAULT_COOKIE_NAME;

      if (!req.cookies[cookieName]) {
        res.cookie(cookieName, fp.id, {
          httpOnly,
          domain,
        });
      }
      next();
    }
  }
  return mixin(Middleware);
}
