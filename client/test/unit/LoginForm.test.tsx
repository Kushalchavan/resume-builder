import { render, screen } from "@testing-library/react";
import Login from "@/pages/auth/Login";
import { Wrapper } from "../utils/test-utils";
import { describe, test, expect } from "vitest";

describe("Login Page UI", () => {
  test("renders email and password input fields", () => {
    render(<Login />, { wrapper: Wrapper });

    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
  });
});
