import express from "express";
import * as UserController from "../controller/User";

const route = express.Router();

route.post("/create", [], UserController.createUser);
route.post("/all", [], UserController.getAllUsers);

export default route;
