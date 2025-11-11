import { generateToken } from "../../src/utils/jwt";
import jwt from "jsonwebtoken";
import { jest } from "@jest/globals";
import dotenv from "dotenv";
dotenv.config();

describe("JWT utility functions", () => {
  test("should generate valid token", () => {
    const token = generateToken("123");
    expect(typeof token).toBe("string");

    // verify token contains correct payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "test_secret");
    expect(decoded).toHaveProperty("userId", "123");
  });

  test("should set cookie when response is provided", () => {
    const mockRes = {
      cookie: jest.fn(),
    };

    const token = generateToken("123", mockRes);
    expect(mockRes.cookie).toHaveBeenCalledWith(
      "jwt",
      expect.any(String),
      expect.objectContaining({ sameSite: "strict", httpOnly: true })
    );

    expect(typeof token).toBe("string");
  });
});
