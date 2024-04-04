import { Request, Response } from "express";
import { getUserModel } from "../models/User";
import { getAddressModel } from "../models/Address";

export const createOrder = async (req: Request, res: Response) => {
    const { firstName, lastName, password, email, addressid, hobbies } =
        req.body;
    const User = await getUserModel(req.dbConfig);
    const userObj = await User.create({
        firstName,
        lastName,
        password,
        email,
        addressId: addressid,
        hobbies,
    });
    return res.status(200).json({ userObj });
};

export const deleteOrder = async (req: Request, res: Response) => {
    const { userId } = req.body;
    const User = await getUserModel(req.dbConfig);
    const userObj = await User.destroy({ where: { id: userId } });
    return res.status(200).json({ data: userObj, msg: "User deleted" });
};

export const findOrder = async (req: Request, res: Response) => {
    const { userId } = req.body;
    const User = await getUserModel(req.dbConfig);
    const userObj = await User.findOne({
        attributes: { exclude: ["password", "createdAt", "updatedAt"] },
        where: { id: userId },
    });
    return res.status(200).json({ data: userObj, msg: "" });
};

export const getAllOrder = async (req: Request, res: Response) => {
    const Address = await getAddressModel(req.dbConfig);
    const User = await getUserModel(req.dbConfig);
    const userObj = await User.findAll({
        attributes: ["id", "fullName", "email", "firstName", "lastName"],
        include: [
            {
                model: Address,
                attributes: ["landmark", "city", "state", "country"],
            },
        ],
    });
    return res.status(200).json({ userObj });
};
