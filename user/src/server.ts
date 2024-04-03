// require("../src/config/database");
// import sequelize from "./config/database";
import { app } from "./index";

declare global {
    namespace Express {
        interface Request {
            sequelize?: any;
            userInfo?: any;
            dbConfig?: any;
        }
    }
}

const start = async () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
};

start();
