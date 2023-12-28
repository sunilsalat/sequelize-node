// src/models/User.ts
import Sequelize, { Model } from "sequelize";
import sequelize from "../config/database";

interface AddressAttributes {
    landmark: string;
    city: string;
    state: string;
    country: string;
    id?: any;
}

class Address extends Model<AddressAttributes> {}

Address.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        landmark: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { sequelize }
);

export default Address;
