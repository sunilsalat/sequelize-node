import express from "express";
import * as AddressController from "../controller/Address";

const route = express.Router();

route.post("/create", [], AddressController.createAddress);
route.post("/find", [], AddressController.findAddress);

export default route;
