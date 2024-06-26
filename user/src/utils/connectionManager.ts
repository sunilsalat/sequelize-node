import { Sequelize } from "sequelize";
import { loadAssociations, loadModels } from "../models/loadModels";

export const connections: any = {};

export const connect = async (dbConfig: any) => {
    try {
        let sequelize: any;
        const { db_name, db_user, db_password, config } = dbConfig;

        console.log(
            `****************************
            Request receivedAt - ${Date.now()}
            Db Config - ${JSON.stringify(dbConfig)}
            *****************************`
        );

        if (!connections[db_name]) {
            sequelize = new Sequelize(db_name, db_user, db_password, config);
            await sequelize.authenticate();
            await loadModels(sequelize);
            await loadAssociations(sequelize);
            await sequelize.sync();
            connections[db_name] = sequelize;
        }

        return connections[db_name];
    } catch (error) {
        throw error;
    }
};
