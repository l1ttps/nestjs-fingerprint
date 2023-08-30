import { Injectable, NestMiddleware, Type, mixin } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import generateFingerprint from "src/core/generateFingerprint";
import { ModuleConfigs } from "../type";

export function NestjsFingerprintMiddleware(
  options: ModuleConfigs
): Type<NestMiddleware> {
  @Injectable()
  class AuthMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
      const { params } = options;
      const fp = generateFingerprint(req, params);
      req.fp = fp;
      next();
    }
  }
  return mixin(AuthMiddleware);
}
