import { Injectable, NestMiddleware, Type, mixin } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export function NestjsFingerprintMiddleware(options): Type<NestMiddleware> {
  @Injectable()
  class AuthMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
      next();
    }
  }
  return mixin(AuthMiddleware);
}
