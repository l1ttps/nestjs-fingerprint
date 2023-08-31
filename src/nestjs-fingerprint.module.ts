import { DynamicModule, MiddlewareConsumer, NestModule } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
import { NestjsFingerprintMiddleware } from "./middlewares/nestjs-fingerprint.middleware";
import { ModuleConfigs, defaultModuleConfigs } from "./type";

export class NestjsFingerprintModule implements NestModule {
  private static configs: ModuleConfigs;
  /**
   * Initializes the root module of the application.
   *
   * @param configs - The configuration options for the module. Defaults to `defaultModuleConfigs`.
   * @returns A promise that resolves to an object containing the module configuration.
   */
  static async forRoot(
    configs: ModuleConfigs = defaultModuleConfigs
  ): Promise<DynamicModule> {
    // Set the module configuration
    this.configs = configs;

    // Return the module configuration
    return {
      global: true,
      module: NestjsFingerprintModule,
    };
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes("*");
    consumer
      .apply(NestjsFingerprintMiddleware(NestjsFingerprintModule.configs))
      .forRoutes("*");
  }
}
