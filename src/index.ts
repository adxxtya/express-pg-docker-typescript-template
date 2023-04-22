import express, { Request, Response } from "express";
import { connectToDB } from "./db/db";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
dotenv.config();

connectToDB();

app.get("/test", (req: Request, res: Response) => {
  res.send("hi bro");
});

app.get("/json", (request, response) => {
  response.json({
    info: "Node.js, Express, and Postgres API",
  });
});

app.listen(process.env.NODE_PORT, () => {
  console.log(`Server is running at ${process.env.NODE_PORT}`);
});
