require("express-async-errors");
import express, { Request, Response, NextFunction } from "express";
import { loadRoute } from "./routes";
import { dbMiddleware } from "./middlewares/dbMiddleware";
import { ErrorHandler } from "./middlewares/errorHandler";

declare global {
    namespace Express {
        interface Request {
            sequelize?: any;
            userInfo?: any;
            dbConfig?: any;
        }
    }
}

const app = express();
app.use(express.json());

app.use(async (req: Request, res: Response, next: NextFunction) => {
    // let db_name = process.env.DB_SCHEMA!;
    let db_name = req.body.db_name;
    let db_user = process.env.DB_USER!;
    let db_password = process.env.DB_PASSWORD!;
    let host = process.env.DB_HOST!;
    let port = process.env.DB_PORT!;

    req.dbConfig = {
        name: "crm-db",
        data: {
            db_name,
            db_user,
            db_password,
            config: {
                host: host,
                port: Number(port),
                dialect: "postgres",
                dialectOptions: {
                    ssl: process.env.DB_SSL == "true",
                },
            },
        },
    };
    next();
});

app.use(dbMiddleware);

loadRoute();

app.use(ErrorHandler);
export { app };
