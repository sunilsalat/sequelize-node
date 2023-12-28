import { app } from "..";
import UserRoute from "./UserRoutes";
import AddressRoute from "./addressRoutes";

export const loadRoute = () => {
    app.use("/api/v1/user", UserRoute);
    app.use("/api/v1/address", AddressRoute);
};
