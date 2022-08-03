import supertest from "supertest";
import { app } from "../../index";

const request = supertest(app);

describe("Test Endpoints /api of responses ", () => {
  it("should return response - Welcome to image processing API", async () => {
    const response = await request.get("/api");
    expect(response.text).toEqual("Welcome to image processing API");
    expect(response.status).toBe(200);
  });
});

describe("Test Endpoint /api/images", () => {
  it("should response status to be 200", async () => {
    const response = await request.get("/api/images?filename=Lion&&width=300&&height=200");
    expect(response.status).toBe(200);
  });
});
