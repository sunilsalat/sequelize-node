require("../src/config/database");
import { app } from "./index";

const start = async () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
};

start();
