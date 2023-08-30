import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Fingerprint = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.fp;
});
