import { initAddressModel } from "./Address";
import { initUserModel } from "./User";

export const loadModels = async (sequelize: any) => {
    initAddressModel(sequelize);
    initUserModel(sequelize);
};
