// src/models/User.ts
import { DataTypes, Model } from "sequelize";
import { getTenantAddressModel } from "./Address";
import { connect } from "../middlewares/dbMiddleware";

interface UserAttributes {
    name: string;
    email: string;
    hobbies?: [];
    addressid?: string;
    id?: number;
}

export const getTenantUserModel = (sequelize: any) => {
    let Address = getTenantAddressModel(sequelize);

    class Emp extends Model<UserAttributes> {}

    Emp.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
            },
            // hobbies: {
            //     type: DataTypes.ARRAY(DataTypes.STRING),
            //     allowNull: true,
            // },
        },
        { sequelize }
    );

    Emp.sync({ alter: true });

    Emp.belongsTo(Address, {
        foreignKey: { name: "addressid" },
    });

    Address.hasOne(Emp);

    return Emp;
};

export const getUserModel = async (dbConfig: any) => {
    const seqConn = await connect(dbConfig);
    const Emp = await seqConn.models["Emp"];
    return Emp;
};

// export default Emp;
