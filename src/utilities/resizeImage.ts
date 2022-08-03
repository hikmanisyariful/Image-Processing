import sharp from "sharp";
import path from "path";

const resizeImage = async (filename: string, width: number, height: number): Promise<void> => {
  const originalImagePath = path.resolve(`./assets/images/${filename}.jpg`);
  const thumbnailPath = path.resolve(`./assets/thumbnails/${filename}${width}x${height}.jpg`);

  await sharp(originalImagePath).resize(width, height).toFile(thumbnailPath);
};

export default resizeImage;
