import express from "express";
import { loadRoute } from "./routes";

const app = express();
app.use(express.json());

loadRoute();

export { app };
