import { Request, Response } from "express";
import { getTenantUserModel } from "../models/User";

export const createUser = async (req: Request, res: Response) => {
    const { name, email, addressid, hobbies } = req.body;
    const Emp = getTenantUserModel(req.sequelize);

    const userObj = await Emp.create({
        name,
        email,
        addressid,
        hobbies,
    });

    return res.status(200).json({ userObj });
};

export const updateUser = async (req: Request, res: Response) => {
    const { userId, name, email, addressid } = req.body;
    const Emp = getTenantUserModel(req.sequelize);

    const userObj = await Emp.update(
        {
            name,
            email,
            addressid,
        },
        { where: { id: userId } }
    );

    return res.status(200).json({ userObj });
};

export const getAllUsers = async (req: Request, res: Response) => {
    const Emp = getTenantUserModel(req.sequelize);

    const userObj = await Emp.findAll({});

    return res.status(200).json({ userObj });
};
