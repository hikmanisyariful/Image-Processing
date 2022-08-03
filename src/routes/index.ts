import express from "express";
import image from "./images";

const routes = express.Router();

routes.get("/api", (req: express.Request, res: express.Response): void => {
  res.send("Welcome to image processing API");
});

routes.use("/api/images", image);

export default routes;
