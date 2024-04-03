// src/models/User.ts
import { DataTypes, Model } from "sequelize";
import { connect, connections } from "../middlewares/dbMiddleware";

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

export const getAddressModel = async (dbConfig: any) => {
    const seqConn = await connect(dbConfig);
    console.log(seqConn);
    const Address = await seqConn.models["Address"];
    return Address;
};

// export default Address;
