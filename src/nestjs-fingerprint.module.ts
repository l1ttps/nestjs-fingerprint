import { DynamicModule } from "@nestjs/common";
import { ModuleConfigs, defaultModuleConfigs } from "./module.config";
import { NestjsFingerprintService } from "./nestjs-fingerprint.service";

export class NestjsFingerprintModule {
  /**
   * Initializes the module for the root of the application.
   *
   * @return {Promise<DynamicModule>} An object containing the configuration of the module.
   */
  static async forRoot(
    configs: ModuleConfigs = defaultModuleConfigs
  ): Promise<DynamicModule> {
    return {
      global: true,
      module: NestjsFingerprintModule,
      providers: [NestjsFingerprintService],
    };
  }
}
