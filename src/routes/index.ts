import express from "express";
import image from "./images";

const routes = express.Router();

routes.get("/api", (req, res) => {
  res.send("Welcome to image processing API");
});

routes.use("/api", image);

export default routes;
