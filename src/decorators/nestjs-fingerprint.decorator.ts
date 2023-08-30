import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { IFingerprint } from "src/type";
export const Fingerprint = createParamDecorator(
  (_, ctx: ExecutionContext): IFingerprint => {
    const request: Request & { fp: IFingerprint } = ctx
      .switchToHttp()
      .getRequest();
    return request.fp;
  }
);
