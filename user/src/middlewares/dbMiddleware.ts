import { NextFunction, Request, Response } from "express";
import { Sequelize } from "sequelize";

const connections: any = {};

export const dbMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log("indb middleware", req.dbConfig);
        let sequelize: any;
        const { name, data } = req.dbConfig;

        if (!connections[name]) {
            sequelize = new Sequelize(
                data.db_name,
                data.db_user,
                data.db_password,
                data.config
            );
            connections[name] = sequelize;
        }

        sequelize
            .authenticate()
            .then(() => {
                console.log("Connection has been established successfully.");
            })
            .catch((error: any) => {
                console.error("Unable to connect to the database:", error);
            });

        sequelize
            .sync()
            .then(() => console.log("Tables created or updated successfully!"))
            .catch((error: any) =>
                console.error("Error synchronizing tables:", error)
            );

        req.sequelize = connections[name];

        next();
    } catch (error) {
        throw error;
    }
};
