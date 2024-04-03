import { getTenantAddressModel } from "./Address";
import { getTenantUserModel } from "./User";

export const loadModels = async (sequelize: any) => {
    getTenantAddressModel(sequelize);
    getTenantUserModel(sequelize);
};
