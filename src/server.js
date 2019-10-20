import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (reqeust, response) => {
    return response.json({a: "b"});
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
