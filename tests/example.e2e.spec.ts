import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "example/src/app.module";
import * as request from "supertest";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  }, 10000);

  afterAll(() => app.close(), 10000);

  it("/ (GET)", () => {
    return request(app.getHttpServer()).get("/").expect(200);
  });

  it("/my-ip-address (GET)", () => {
    return request(app.getHttpServer()).get("/my-ip-address").expect(200);
  });
});
