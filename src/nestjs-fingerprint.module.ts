import { DynamicModule } from "@nestjs/common";
import { NestjsFingerprintService } from "./nestjs-fingerprint.service";

export class NestjsFingerprintModule {
  static async forRoot(): Promise<DynamicModule> {
    return {
      global: true,
      module: NestjsFingerprintModule,
      providers: [NestjsFingerprintService],
    };
  }
}
