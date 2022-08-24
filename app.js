/* eslint-disable import/extensions */
/* eslint-disable quotes */
import express from "express";
import homeRoutes from "./src/routes/homeRoutes.js";

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
  }
}

export default new App().app;
