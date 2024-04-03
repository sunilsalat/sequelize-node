import { NextFunction, Request, Response } from "express";
import { Sequelize } from "sequelize";
import { loadModels } from "../models/loadModels";

export const connections: any = {};

export const connect = async (dbConfig: any) => {
    try {
        let sequelize: any;
        const { db_name, db_user, db_password, config } = dbConfig;

        console.log("***********************************************");
        console.log(
            `************request receivedAt - ${Date.now()}************`
        );
        console.log({ config: dbConfig });
        console.log("***********************************************");

        if (!connections[db_name]) {
            console.log("iside");
            sequelize = new Sequelize(db_name, db_user, db_password, config);

            await sequelize.authenticate();
            // .then(() => {
            //     console.log("Connection has been established successfully.");
            // })
            // .catch((error: any) => {
            //     console.error("Unable to connect to the database:", error);
            // });

            loadModels(sequelize);
            await sequelize.sync({ alter: true });
            // .then(() => console.log("Tables created or updated successfully!"))
            // .catch((error: any) =>
            //     console.error("Error synchronizing tables:", error)
            // );
            connections[db_name] = sequelize;
        }

        console.log({ kyeInConn: Object.keys(connections).length });
        // for (const key in connections) {
        //     console.log("key called"); // Logs each key and its corresponding value
        // }
        // console.log(connections[name]);
        return connections[db_name];
    } catch (error) {
        throw error;
    }
};
