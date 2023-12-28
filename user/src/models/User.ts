// src/models/User.ts
import Sequelize, { Model } from "sequelize";
import sequelize from "../config/database";
import Address from "./UserAddress";

interface UserAttributes {
    name: string;
    email: string;
    addressid?: string;
    id?: number;
}

class Emp extends Model<UserAttributes> {}

Emp.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
        },
    },
    { sequelize }
);

Emp.belongsTo(Address, {
    foreignKey: { name: "addressid" },
    as: "address",
});

export default Emp;
