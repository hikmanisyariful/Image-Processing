import sharp from "sharp";
import path from "path";

const resizeImage = async (
  filename: string,
  width: number,
  height: number,
  failedResize: (error: string, status: number) => void,
  showFile: (path: string, status: number) => void
): Promise<void> => {
  const originalImagePath = path.resolve(`./assets/images/${filename}.jpg`);
  const thumbnailPath = path.resolve(
    `./assets/thumbnails/${filename}${width}x${height}.jpg`
  );

  try {
    await sharp(originalImagePath)
      .resize({ width, height })
      .toFile(thumbnailPath);
    showFile(thumbnailPath, 200);
  } catch (error) {
    failedResize("Input file is missing", 404);
  }
};

export default resizeImage;
