import express from "express";
import * as OrderController from "../controller/Order";

const route = express.Router();

route.post("/create", [], OrderController.createOrder);
route.post("/all", [], OrderController.getAllOrder);
route.post("/find", [], OrderController.findOrder);
route.post("/delete", OrderController.deleteOrder);

export default route;
