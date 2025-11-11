import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    if (process.env.NODE_ENV === "test") return;
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDb: ${error.message}`);
    process.exit(1);
  }
};
