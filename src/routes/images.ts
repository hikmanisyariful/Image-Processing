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
  };

  const showFile = (path: string, status: number): void => {
    res.status(status).sendFile(path);
  };

  if (!filename || !width || !height) {
    failedMessage("Please give the url which has a filename, width, and height!", 400);
  }

  if (fs.existsSync(thumbFile)) {
    showFile(thumbFile, 200);
  } else if (fs.existsSync(imageFile)) {
    try {
      await resizeImage(filename, width, height);
      showFile(thumbFile, 200);
    } catch (error) {
      failedMessage("Input file is missing", 400);
    }
  } else {
    failedMessage("Input file is missing", 400);
  }
});

export default routes;
