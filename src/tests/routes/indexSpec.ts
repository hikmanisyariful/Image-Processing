import supertest from "supertest";
import { app } from "../../index";

const request = supertest(app);

describe("Test Endpoints /api of responses ", () => {
  it("should return response - Welcome to image processing API", async (): Promise<void> => {
    const response = await request.get("/api");
    expect(response.text as unknown as string).toEqual(
      "Welcome to image processing API"
    );
  });
});

describe("Test Endpoint /api/images", () => {
  it("should response error code 400 if request query string is not provided", async () => {
    const response = await request.get("/api/images?filename=Lion");
    console.log(response.status);
    expect(response.status).toBe(400);
  });
});
