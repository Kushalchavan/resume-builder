import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../../src/index.js";
import { protectRoute } from "../../src/middlewares/user.middleware.js";
import jwt from "jsonwebtoken";
import User from "../../src/model/user.model.js";

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

// signup api
describe("POST /api/v1/auth/signup", () => {
  test("should register a user successfully", async () => {
    const response = await request(app).post("/api/v1/auth/signup").send({
      username: "John Doe",
      email: "John@gmail.com",
      password: "John@123",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("message");
  });

  test("should not register user with existing email", async () => {
    const response = await request(app).post("/api/v1/auth/signup").send({
      username: "John Doe",
      email: "John@gmail.com",
      password: "John@123",
    });

    expect(response.statusCode).toBe(400);
  });
});

// login api
describe("POST /api/v1/auth/login", () => {
  test("should login successfully with correct credentials", async () => {
    // register first
    await request(app).post("/api/v1/auth/signup").send({
      username: "John Doe",
      email: "John@gmail.com",
      password: "John@123",
    });

    // then login
    const response = await request(app)
      .post("/api/v1/auth/login")
      .send({ email: "John@gmail.com", password: "John@123" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  test("should reject wrong credentials", async () => {
    const response = await request(app)
      .post("/api/v1/auth/login")
      .send({ email: "wrong@example.com", password: "wrongpass" });

    expect(response.statusCode).toBe(401);
  });
});

// protected route
// Mock route that uses protectRoute
app.get("/protected", protectRoute, (req, res) => {
  res.json({ user: req.user });
});

describe("protectRoute middleware", () => {
  test("should deny access if no token is provided", async () => {
    const res = await request(app).get("/protected");
    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe("Unauthorized - No token provided");
  });

  test("should allow access with valid token", async () => {
    const dummyUserId = new mongoose.Types.ObjectId().toString();
    const token = jwt.sign({ userId: dummyUserId }, process.env.JWT_SECRET);

    await User.create({ _id: dummyUserId, username: "Test", email: "test@test.com", password: "test123" });

    const res = await request(app)
      .get("/protected")
      .set("Cookie", [`jwt=${token}`]);
    expect(res.statusCode).toBe(200);
    expect(res.body.user).toBeDefined();
  });
});
