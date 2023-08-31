<p align="center">
    <img src="https://github.com/l1ttps/nestjs-fingerprint/blob/main/docs/banner.png?raw=true" alt="Nestjs Fingerprint"/>
</p>

[![NPM](https://img.shields.io/npm/v/nestjs-fingerprint.svg)](https://www.npmjs.com/package/nestjs-fingerprint)
[![NPM](https://img.shields.io/npm/dm/nestjs-fingerprint.svg)](https://www.npmjs.com/package/nestjs-fingerprint)

**Server-side fingerprinting library for framework NestJs**

## Features
- Generate fingerprint for each browser or device
- Function decorator support
- Auto set cookie

## Installation

``` 
npm install --save nestjs-fingerprint

or

yarn add nestjs-fingerprint
```

## Usage
app.module.ts
```typescript
import { Module } from '@nestjs/common';
import { NestjsFingerprintModule } from 'nestjs-fingerprint';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    NestjsFingerprintModule.forRoot({
      params: ['headers', 'userAgent', 'ipAddress'],
      cookieOptions: {
        name: 'your_cookie_name', // optional
        httpOnly: true, // optional
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
```

app.controller.ts
```typescript
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

```

Fingerprint example: 
```json
{
  "id": "79c0678d8672fafb932a97a1368d7bf3",
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "language": "en-US,en;q=0.9"
  },
  "userAgent": {
    "browser": {
      "family": "Chrome",
      "version": "xxx"
    },
    "device": {
      "family": "Other",
      "version": "0"
    },
    "os": {
      "family": "Windows",
      "major": "10",
      "minor": "0"
    }
  },
  "ipAddress": {
    "value": "xxx.xxx.xxx.xxx"
  }
}
```

  
## License

MIT © [l1ttps](https://github.com/l1ttps)
