import { app } from "..";
import UserRoute from "./UserRoutes";
import AddressRoute from "./addressRoutes";
import OrderRoute from "./orderRoutes";

export const loadRoute = () => {
    app.use("/api/v1/user", UserRoute);
    app.use("/api/v1/address", AddressRoute);
    app.use("/api/v1/order", OrderRoute);
};
