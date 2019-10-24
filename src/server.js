import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import portfinder from "portfinder";
import morgan from "morgan";

const app = express();
const corsWhitelist = ["https://yetric.net", "https://yetric.com", "https://yetric.org"];
const corsOptions = {
    origin: function(origin, callback) {
        if (corsWhitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
};
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors(corsOptions));
app.use(morgan("combined"));
app.disable("x-powered-by");

app.get("/", (reqeust, response) => {
    return response.json({a: "b"});
});

const startApp = (error, port) => {
    app.listen(port, () => {
        console.log(`server listening on port ${port}`);
    });
};

portfinder.basePort = 3000;
portfinder.getPort(startApp);
