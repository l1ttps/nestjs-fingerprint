import { Controller, Get } from '@nestjs/common';
import { Fingerprint, IFingerprint, RealIp } from 'nestjs-fingerprint';
@Controller()
export class AppController {
  @Get()
  getFingerprint(@Fingerprint() fp: IFingerprint): IFingerprint {
    return fp;
  }

  @Get('my-ip-address')
  getMyIpAddress(@RealIp() ipAddress: string): string {
    return ipAddress;
  }
}
