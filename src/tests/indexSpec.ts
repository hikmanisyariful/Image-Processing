import { port } from "../index";

describe("Tests port", () => {
  it("should running on port 3001", () => {
    expect(port).toEqual(3001);
  });
});
