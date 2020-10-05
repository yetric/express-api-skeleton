import express from "express";
const router = express.Router();

router.get("/", (request, response) => {
    return response.json({a: "b"});
});

export default router;
