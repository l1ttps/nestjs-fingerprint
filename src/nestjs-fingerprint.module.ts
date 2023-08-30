import { DynamicModule, MiddlewareConsumer, NestModule } from "@nestjs/common";
import { NestjsFingerprintMiddleware } from "./middlewares/nestjs-fingerprint.middleware";
import { ModuleConfigs, defaultModuleConfigs } from "./type";

export class NestjsFingerprintModule implements NestModule {
  private static configs: ModuleConfigs;
  /**
   * Initializes the module for the root of the application.
   *
   * @return {Promise<DynamicModule>} An object containing the configuration of the module.
   */
  static async forRoot(
    configs: ModuleConfigs = defaultModuleConfigs
  ): Promise<DynamicModule> {
    this.configs = configs;
    return {
      global: true,
      module: NestjsFingerprintModule,
    };
  }

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(NestjsFingerprintMiddleware(NestjsFingerprintModule.configs))
      .forRoutes("*");
  }
}
