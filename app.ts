import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/user.route";

export default function appConfig(app: Application) {
  //initializing middlewares
  app
    .use(express.json())
      .use(cors())
      .use(morgan("dev"))

    //routes
    .use("/api/auth", router);
}
