import { Sequelize } from "sequelize";

let db_name = process.env.DB_SCHEMA!;
let db_user = process.env.DB_USER!;
let db_password = process.env.DB_PASSWORD!;
let host = process.env.DB_HOST!;
let port = process.env.DB_PORT!;

console.log({ db_name, db_user, db_password, host, port });

const sequelize = new Sequelize(db_name, db_user, db_password, {
    host: host,
    port: Number(port),
    dialect: "postgres",
    dialectOptions: {
        ssl: process.env.DB_SSL == "true",
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error);
    });

sequelize
    .sync()
    .then(() => console.log("Tables created or updated successfully!"))
    .catch((error) => console.error("Error synchronizing tables:", error));

export default sequelize;
