// src/models/User.ts
import { DataTypes, Model } from "sequelize";
import { connect } from "../utils/connectionManager";

interface UserAttributes {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    fullName?: string;
    hobbies?: [];
    addressId?: string;
    id?: number;
}

export const initUserModel = (sequelize: any) => {
    const { Address, Order } = sequelize.models;
    class User extends Model<UserAttributes> {
        [x: string]: any;
    }

    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [4, 6],
                },
                get() {
                    const rawValue = this.getDataValue("firstName");
                    return rawValue ? rawValue.toUpperCase() : null;
                },
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [4, 6],
                },
            },
            fullName: {
                type: DataTypes.VIRTUAL,
                get() {
                    return `${this.firstName} ${this.lastName}`;
                },
                set(value) {
                    throw new Error("Do not try to set the `fullName` value!");
                },
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                set(value: string) {
                    this.setDataValue("password", hash(value));
                },
            },
            hobbies: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
            },
        },
        {
            sequelize,
            validate: {
                bothNameOrNone() {
                    if (
                        (this.firstName === null) !==
                        (this.lastName === null)
                    ) {
                        throw new Error(
                            "Either both firstName and lastName, or neither!"
                        );
                    }
                },
            },
        }
    );

    Address.hasOne(User, { foreignKey: "addressId" });

    User.belongsTo(Address, {
        foreignKey: {
            name: "addressId",
            allowNull: false,
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });

    User.hasMany(Order, {
        foreignKey: {
            name: "userId",
        },
    });
};

export const getUserModel = async (dbConfig: any) => {
    const seqConn = await connect(dbConfig);
    const User = await seqConn.models["User"];
    return User;
};

function hash(value: string): string {
    return value;
}
