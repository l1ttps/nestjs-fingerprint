import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { Fingerprint, IFingerprint, RealIp } from 'nestjs-fingerprint';
@Controller()
export class AppController {
  @Get()
  getFingerprint(@Fingerprint() fp: IFingerprint): IFingerprint {
    return fp;
  }

  @Get('my-ip-address')
  getMyIpAddress(@RealIp() ipAddress: string, @Req() req: Request) {
    console.log(req.socket.remoteAddress);
    const { headers } = req;
    return { headers };
  }
}
