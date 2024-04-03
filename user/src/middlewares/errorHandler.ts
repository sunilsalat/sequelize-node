import { NextFunction, Request, Response } from "express";

export const ErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log({ err });
    return res.status(500).json({ err: err.message });
};
