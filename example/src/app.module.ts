import { Module } from '@nestjs/common';
import { NestjsFingerprintModule } from 'nestjs-fingerprint';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    NestjsFingerprintModule.forRoot({
      params: ['headers', 'userAgent', 'ipAddress'],
      cookieOptions: {
        httpOnly: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
