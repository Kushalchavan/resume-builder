import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRouter from "./routes/user.route.js";
import resumeRouter from "./routes/resume.route.js";
import aiRouter from "./routes/ai.routes.js";
import { connectDb } from "./config/db.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;
connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost", "http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/resumes", resumeRouter);
app.use("/api/v1/ai", aiRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
