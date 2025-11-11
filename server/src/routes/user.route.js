import express from "express";
import { checkAuth, login, signup } from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/user.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/check-auth", protectRoute, checkAuth);

export default router;
