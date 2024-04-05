// src/models/User.ts
import { DataTypes, Model } from "sequelize";
import { connect } from "../utils/connectionManager";

interface AddressAttributes {
    landmark: string;
    city: string;
    state: string;
    country: string;
    id?: any;
}

class Address extends Model<AddressAttributes> {}

export const initAddressModel = (sequelize: any) => {
    Address.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            landmark: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        { sequelize }
    );
};

export const loadAddressAssociation = (sequelize: any) => {
    const { Address, User } = sequelize.models;
    Address.hasOne(User, { foreignKey: "addressId" });
};

export const getAddressModel = async (dbConfig: any) => {
    const seqConn = await connect(dbConfig);
    const Address = await seqConn.models["Address"];
    return Address;
};
