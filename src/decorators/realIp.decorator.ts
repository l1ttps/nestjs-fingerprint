import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { IFingerprint } from "src/type";

export const RealIp = createParamDecorator(
  (_, ctx: ExecutionContext): string => {
    const request: Request & { fp: IFingerprint } = ctx
      .switchToHttp()
      .getRequest();
    return request.fp.ipAddress.value;
  }
);
