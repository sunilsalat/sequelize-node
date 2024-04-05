import { initAddressModel, loadAddressAssociation } from "./Address";
import { initOrderModel, loadOrderAssociations } from "./Order";
import { initUserModel, loadUserAssociation } from "./User";

export const loadModels = async (sequelize: any) => {
    initAddressModel(sequelize);
    initUserModel(sequelize);
    initOrderModel(sequelize);
};

export const loadAssociations = async (sequelize: any) => {
    console.log(sequelize.models);
    loadAddressAssociation(sequelize);
    loadOrderAssociations(sequelize);
    loadUserAssociation(sequelize);
};
