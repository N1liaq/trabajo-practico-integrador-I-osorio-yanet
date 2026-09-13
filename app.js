import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { startDB } from "./src/config/database.js";
import { userRouter } from "./src/routes/user.routes.js";

config();
const app = express();
const portDB = process.env.PORTDB;
const origin = process.env.ORIGIN;
const credentials = process.env.CREDENTIALS;

app.use(express.json());

app.use("/api", userRouter);
app.use(
  cors({
    origin: origin,
    Credentials: credentials,
  }),
);

app.listen(portDB, async () => {
  await startDB();
  console.log("servidor encendido");
});
