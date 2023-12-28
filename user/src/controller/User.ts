import { Request, Response } from "express";
import Emp from "../models/User";
import sequelize from "../config/database";

export const createUser = async (req: Request, res: Response) => {
    const { name, email, addressid } = req.body;
    const userObj = await Emp.create({
        name,
        email,
        addressid,
    });
    return res.status(200).json({ userObj });
};

export const getAllUsers = async (req: Request, res: Response) => {
    const userObj = await Emp.findAll({});
    return res.status(200).json({ userObj });
};
