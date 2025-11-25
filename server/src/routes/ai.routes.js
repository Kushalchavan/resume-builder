import express from "express";
import { protectRoute } from "../middlewares/user.middleware.js";
import {
  enhanceJobDescription,
  enhanceProfessionalSummary,
} from "../controllers/ai.controller.js";

const aiRouter = express.Router();

aiRouter.post("/enhance-pro-sum", protectRoute, enhanceProfessionalSummary);
aiRouter.post("/enhance-pro-desc", protectRoute, enhanceJobDescription);

export default aiRouter;
