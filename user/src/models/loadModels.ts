import { initAddressModel } from "./Address";
import { initOrderModel } from "./Order";
import { initUserModel } from "./User";

export const loadModels = async (sequelize: any) => {
    initAddressModel(sequelize);
    initOrderModel(sequelize);
    initUserModel(sequelize);
};
