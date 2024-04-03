// src/models/User.ts
import { DataTypes, Model } from "sequelize";

interface AddressAttributes {
    landmark: string;
    city: string;
    state: string;
    country: string;
    id?: any;
}

class Address extends Model<AddressAttributes> {}

export const getTenantAddressModel = (sequelize: any) => {
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

    return Address;
};

// export default Address;
