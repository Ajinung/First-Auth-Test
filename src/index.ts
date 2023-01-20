import express, { Application } from "express";
import appConfig from "../app";
import dbConnection from "../config/db";

//instantiate express
const app: Application = express();
const port: number | string = process.env.port || 5000;

appConfig(app);
dbConnection();

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
