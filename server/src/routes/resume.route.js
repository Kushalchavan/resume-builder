import express from "express";
import {
  createResume,
  deleteResume,
  getPublicResumeById,
  getResumeById,
  updateResume,
} from "../controllers/resume.controller.js";
import { protectRoute } from "../middlewares/user.middleware.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/create", protectRoute, createResume);
router.put("/update", upload.single("image"), protectRoute, updateResume);
router.delete("/delete:resumeId", protectRoute, deleteResume);
router.get("/get/:resumeId", protectRoute, getResumeById);
router.get("/public/:resumeId", getPublicResumeById);

export default router;
