import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRouter from "./routes/user.route.js";
import { connectDb } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3001;
connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
