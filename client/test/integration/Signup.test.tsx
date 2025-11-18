import { describe, test, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Signup from "@/pages/auth/Signup";
import MockAdapter from "axios-mock-adapter";
import { BrowserRouter } from "react-router";
import axiosInstance from "../../src/api/api"; 

const mock = new MockAdapter(axiosInstance);

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe("Signup Integration Test", () => {
  test("successful signup shows success message", async () => {
    mock.onPost("/auth/signup").reply(201, {
      message: "User created",
    });

    render(<Signup />, { wrapper: Wrapper });

    fireEvent.change(screen.getByPlaceholderText("Enter name"), {
      target: { value: "john" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter email"), {
      target: { value: "john@test.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter password"), {
      target: { value: "john@123" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Sign up" }));

    await waitFor(() => {
      expect(screen.getByText("user created")).toBeInTheDocument();
    });
  });

  test("failed signup shows error message", async () => {
    mock.onPost("/auth/signup").reply(400, {
      message: "Email already exists",
    });

    render(<Signup />, { wrapper: Wrapper });

    fireEvent.change(screen.getByPlaceholderText("Enter email"), {
      target: { value: "test@test.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter password"), {
      target: { value: "john@123" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Sign Up" }));

    await waitFor(() => {
      expect(screen.getByText("email already exists")).toBeInTheDocument();
    });
  });
});
