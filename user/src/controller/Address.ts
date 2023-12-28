import { Request, Response } from "express";
import Address from "../models/UserAddress";

export const createAddress = async (req: Request, res: Response) => {
    const { landmark, city, state, country } = req.body;
    console.log(landmark, city, state, country, "is payload ");
    const address = await Address.create({ landmark, city, state, country });
    res.status(200).json({ address });
};
