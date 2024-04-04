import { Request, Response } from "express";
import { getAddressModel } from "../models/Address";
import { getUserModel } from "../models/User";

export const createAddress = async (req: Request, res: Response) => {
    const { landmark, city, state, country } = req.body;
    const Address: any = await getAddressModel(req.dbConfig);
    const address = await Address.create({ landmark, city, state, country });
    res.status(200).json({ address });
};
export const findAddress = async (req: Request, res: Response) => {
    const { userId } = req.body;
    const Address = await getAddressModel(req.dbConfig);
    const User = await getUserModel(req.dbConfig);
    const address = await Address.findOne({
        include: User,
        where: { id: userId },
    });
    res.status(200).json({ address });
};
