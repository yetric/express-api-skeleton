import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import portfinder from "portfinder";
import morgan from "morgan";
import dotenv from "dotenv";

import home from "./routes";
import auth from "./routes/auth";

dotenv.config();

const app = express();
const corsWhitelist = process.env.CORS_HOST.split(",");
const corsOptions = {
    origin: function (origin, callback) {
        if (corsWhitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors(corsOptions));
app.use(morgan("combined"));
app.disable("x-powered-by");

app.use("/", home);
app.use("/auth/", auth);

const startApp = (error, port) => {
    app.listen(port, () => {
        console.log(`server listening on port ${port}`);
    });
};

portfinder.basePort = process.env.PORT;
portfinder.getPort(startApp);
