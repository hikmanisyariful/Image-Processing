import express from "express";
import fs from "fs";
import path from "path";

import resizeImage from "../utilities/resizeImage";

const routes = express.Router();

routes.get("/images", async (req, res): Promise<void> => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  const thumbFile = path.resolve(
    `./assets/thumbnails/${filename}${width}x${height}.jpg`
  );

  const failedResize = (error: string, status: number): void => {
    res.status(status).send(error);
  };

  const showFile = (path: string, status: number): void => {
    res.status(status).sendFile(path);
  };

  if (!filename || !width || !height) {
    res
      .status(400)
      .send("Please give the url which has a filename, width, and height!");
  }

  if (fs.existsSync(thumbFile)) {
    showFile(thumbFile, 200);
  } else {
    try {
      await resizeImage(filename, width, height, failedResize, showFile);
    } catch (error) {
      failedResize("Input file is missing", 404);
    }
  }
});

export default routes;
