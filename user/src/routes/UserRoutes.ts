import express, { Router } from "express";
import * as UserController from "../controller/User";

const route = express.Router();

route.post("/create", [], UserController.createUser);
route.post("/update", [], UserController.updateUser);
route.post("/all", [], UserController.getAllUsers);
route.post("/detail", [], UserController.findUser);
route.post("/delete", UserController.deleteUser);

export default route;
