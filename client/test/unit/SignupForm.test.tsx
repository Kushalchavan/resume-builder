import { render, screen } from "@testing-library/react";
import Signup from "@/pages/auth/Signup";
import { Wrapper } from "../utils/test-utils";
import { describe, test, expect } from "vitest";

describe("Signup Page UI", () => {
  test("renders username, email, and password inputs", () => {
    render(<Signup />, { wrapper: Wrapper });

    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
  });
});
