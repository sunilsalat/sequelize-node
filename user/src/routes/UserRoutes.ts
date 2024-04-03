import express from "express";
import * as UserController from "../controller/User";

const route = express.Router();

route.post("/create", [], UserController.createUser);
route.post("/update", [], UserController.updateUser);
route.get("/all", [], UserController.getAllUsers);

export default route;
