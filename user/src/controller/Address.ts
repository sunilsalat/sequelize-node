import { Request, Response } from "express";
import { getAddressModel, getTenantAddressModel } from "../models/Address";

export const createAddress = async (req: Request, res: Response) => {
    const { landmark, city, state, country } = req.body;
    const Address: any = await getAddressModel(req.dbConfig);

    const address = await Address.create({ landmark, city, state, country });
    res.status(200).json({ address });
};
