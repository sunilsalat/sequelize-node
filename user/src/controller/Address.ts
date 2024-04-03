import { Request, Response } from "express";
import { getTenantAddressModel } from "../models/Address";

export const createAddress = async (req: Request, res: Response) => {
    const { landmark, city, state, country } = req.body;
    const Address = getTenantAddressModel(req.sequelize);
    const address = await Address.create({ landmark, city, state, country });
    res.status(200).json({ address });
};
