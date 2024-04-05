import { DataTypes, Model } from "sequelize";
import { connect } from "../utils/connectionManager";

interface OrderAttributes {
    item: [];
    placedAt: Date;
    id?: any;
}

class Order extends Model<OrderAttributes> {}

export const initOrderModel = (sequelize: any) => {
    Order.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            item: {
                type: DataTypes.ARRAY(DataTypes.JSONB),
                allowNull: false,
            },
            placedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        { sequelize }
    );
};

export const loadOrderAssociations = (sequelize: any) => {
    const { User, Order } = sequelize.models;
    Order.belongsTo(User, { foreignKey: { name: "userId" } });
};

export const getOrderModel = async (dbConfig: any) => {
    const seqConn = await connect(dbConfig);
    const Order = await seqConn.models["Order"];
    return Order;
};
