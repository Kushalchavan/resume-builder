import express from "express";
import {
  createResume,
  deleteResume,
  getAllResumes,
  getPublicResumeById,
  getResumeById,
  updateResume,
} from "../controllers/resume.controller.js";
import { protectRoute } from "../middlewares/user.middleware.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/create", protectRoute, createResume);
router.get("/get", protectRoute, getAllResumes);
router.get("/get/:resumeId", protectRoute, getResumeById);
router.get("/public/:resumeId", getPublicResumeById);
router.put(
  "/update/:resumeId",
  upload.single("image"),
  protectRoute,
  updateResume
);
router.delete("/delete/:resumeId", protectRoute, deleteResume);

export default router;
