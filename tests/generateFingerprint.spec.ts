import generateFingerprint from "../src/core/generateFingerprint";
const req = require("./req.json");
describe("generateFingerprint ", () => {
  test("id", () => {
    const fingerprint = generateFingerprint(req, [
      "headers",
      "ipAddress",
      "userAgent",
    ]);
    expect(fingerprint).toEqual({
      id: "785786a5a79344cf932869872d8a4aac",
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        encoding: "gzip, deflate, br",
        language: "en-US,en;q=0.9;q=0.8",
      },
      ipAddress: { value: "::1" },
      userAgent: {
        browser: { family: "Chrome", version: "116" },
        device: { family: "Other", version: "0" },
        os: { family: "Windows", major: "10", minor: "0" },
      },
    });
  });
});
