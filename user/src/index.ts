import express, { Request, Response, NextFunction } from "express";
import { loadRoute } from "./routes";
import { dbMiddleware } from "./middlewares/dbMiddleware";

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

let db_name = process.env.DB_SCHEMA!;
let db_user = process.env.DB_USER!;
let db_password = process.env.DB_PASSWORD!;
let host = process.env.DB_HOST!;
let port = process.env.DB_PORT!;

app.use(async (req: Request, res: Response, next: NextFunction) => {
    console.log("inseid", db_name, db_user, db_password, host, port);
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
    console.log("exit");
    next();
});

app.use(dbMiddleware);

loadRoute();

export { app };
