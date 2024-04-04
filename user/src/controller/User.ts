import { Request, Response } from "express";
import { getUserModel } from "../models/User";
import { getAddressModel } from "../models/Address";

export const createUser = async (req: Request, res: Response) => {
    const { firstName, lastName, password, email, addressid, hobbies } =
        req.body;
    const Emp = await getUserModel(req.dbConfig);
    const userObj = await Emp.create({
        firstName,
        lastName,
        password,
        email,
        addressId: addressid,
        hobbies,
    });
    return res.status(200).json({ userObj });
};

export const updateUser = async (req: Request, res: Response) => {
    const { userId, name, email, addressid } = req.body;
    const Emp = await getUserModel(req.dbConfig);
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

export const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.body;
    const Emp = await getUserModel(req.dbConfig);
    const userObj = await Emp.destroy({ where: { id: userId } });
    return res.status(200).json({ data: "", msg: "User deleted" });
};

export const getAllUsers = async (req: Request, res: Response) => {
    const Address = await getAddressModel(req.dbConfig);
    const Emp = await getUserModel(req.dbConfig);
    const userObj = await Emp.findAll({
        include: [
            {
                model: Address,
                attributes: ["landmark", "city", "state", "country"],
            },
        ],
    });
    return res.status(200).json({ userObj });
};
