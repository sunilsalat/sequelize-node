import { NextFunction, Request, Response } from "express";
import { Sequelize } from "sequelize";
import { loadModels } from "../models/loadModels";

const connections: any = {};

export const dbMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let sequelize: any;
        const { name, data } = req.dbConfig;
        console.log("***********************************************");
        console.log(
            `************request receivedAt - ${Date.now()}************`
        );
        console.log({ config: req.dbConfig });
        console.log("***********************************************");

        if (!connections[name]) {
            sequelize = new Sequelize(
                data.db_name,
                data.db_user,
                data.db_password,
                data.config
            );

            await sequelize.authenticate();
            // .then(() => {
            //     console.log("Connection has been established successfully.");
            // })
            // .catch((error: any) => {
            //     console.error("Unable to connect to the database:", error);
            // });

            await sequelize.sync({ alter: true });
            // .then(() => console.log("Tables created or updated successfully!"))
            // .catch((error: any) =>
            //     console.error("Error synchronizing tables:", error)
            // );
            connections[name] = sequelize;
            loadModels(sequelize);
        }

        req.sequelize = connections[name];

        for (const key in connections) {
            console.log("key called"); // Logs each key and its corresponding value
        }
        // console.log(connections[name]);

        next();
    } catch (error) {
        throw error;
    }
};
