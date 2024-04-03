// src/models/User.ts
import { DataTypes, Model } from "sequelize";
import { getTenantAddressModel } from "./Address";

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

    // Emp.sync({ alter: true });

    Emp.belongsTo(Address, {
        foreignKey: { name: "addressid" },
        as: "address",
    });

    // Address.hasOne(Emp);

    return Emp;
};

// export default Emp;
