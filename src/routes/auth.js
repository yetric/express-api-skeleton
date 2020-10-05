import express from "express";
const router = express.Router();

router.get("/login", (request, response) => {
    return response.json({action: "login"});
});

router.get("/signup", (request, response) => {
    return response.json({action: "signup"});
});

export default router;
