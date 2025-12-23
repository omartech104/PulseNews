import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

export const RequestHeader = createParamDecorator(
  (value: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // NestJS headers are a plain object; we return them so the Pipe can validate them
    return request.headers;
  },
);
