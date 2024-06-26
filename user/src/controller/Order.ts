import { Request, Response } from "express";
import { getOrderModel } from "../models/Order";
import { getUserModel } from "../models/User";

export const createOrder = async (req: Request, res: Response) => {
    const { item, placedAt, userId } = req.body;
    const Order = await getOrderModel(req.dbConfig);
    const orderObj = await Order.create({
        item,
        placedAt,
        userId,
    });
    return res.status(200).json({ orderObj });
};

export const deleteOrder = async (req: Request, res: Response) => {
    const { userId } = req.body;
    const Order = await getOrderModel(req.dbConfig);
    const orderObj = await Order.destroy({ where: { id: userId } });
    return res.status(200).json({ data: orderObj, msg: "User deleted" });
};

export const findOrder = async (req: Request, res: Response) => {
    const { id } = req.body;
    const Order = await getOrderModel(req.dbConfig);
    const User = await getUserModel(req.dbConfig);

    const orderObj = await Order.findOne({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [
            {
                model: User,
                attributes: { exclude: ["password", "createdAt", "updatedAt"] },
            },
        ],
        where: { id: id },
    });
    return res.status(200).json({ data: orderObj, msg: "" });
};

export const getAllOrder = async (req: Request, res: Response) => {
    const Order = await getOrderModel(req.dbConfig);
    const User = await getUserModel(req.dbConfig);
    const orderObj = await Order.findAll({
        include: [
            {
                model: User,
                attributes: { exclude: ["password", "createdAt", "updatedAt"] },
            },
        ],
    });
    return res.status(200).json({ orderObj });
};
