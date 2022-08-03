import express from "express";
import fs from "fs";
import path from "path";

import resizeImage from "../utilities/resizeImage";

const routes = express.Router();

routes.get("/", async (req: express.Request, res: express.Response): Promise<void> => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  const imageFile = path.resolve(`./assets/images/${filename}.jpg`);
  const thumbFile = path.resolve(`./assets/thumbnails/${filename}${width}x${height}.jpg`);

  const failedMessage = (error: string, status: number): void => {
    res.status(status).send(error);
    return;
  };

  const showFile = (path: string, status: number): void => {
    res.status(status).sendFile(path);
    return;
  };

  if (!filename || !width || !height) {
    failedMessage("Please give the url which has a filename, width, and height!", 400);
    return;
  }

  if (fs.existsSync(thumbFile)) {
    showFile(thumbFile, 200);
  } else if (fs.existsSync(imageFile)) {
    if (width > 10 && height > 10) {
      try {
        await resizeImage(filename, width, height);
        showFile(thumbFile, 200);
      } catch (error) {
        failedMessage("Input file is missing", 400);
      }
    } else {
      failedMessage("Minimal width and height are 10", 400);
    }
  } else {
    failedMessage("Input file is missing", 400);
  }
});

export default routes;
