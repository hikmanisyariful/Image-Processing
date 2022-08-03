import fs from "fs";
import path from "path";
import resizeImage from "../../utilities/resizeImage";

describe("Test for image processing", () => {
  it("should exists a image in assets/thumbnails result from resizeImage", async () => {
    const filename = "Sunset";
    const width = 300;
    const height = 200;

    await resizeImage(filename, width, height);

    const thumbFile = path.resolve(`./assets/thumbnails/${filename}${width}x${height}.jpg`);
    expect(fs.existsSync(thumbFile)).toBeTruthy();
  });
});
