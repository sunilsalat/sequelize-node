import express from "express";
import * as AddressController from "../controller/Address";

const route = express.Router();

route.post("/create", [], AddressController.createAddress);

export default route;
