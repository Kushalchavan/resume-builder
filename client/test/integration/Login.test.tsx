import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axiosInstance from "../../src/api/api"; 
import Login from "@/pages/auth/Login";
import { BrowserRouter } from "react-router";

const mock = new MockAdapter(axiosInstance);

// mock navigation
const mockedNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe("Login Integration Test", () => {
  test("successful login redirects user", async () => {
    mock.onPost("/auth/login").reply(200, {
      token: "fake-jwt-token",
    });

    render(<Login />, { wrapper: Wrapper });

    fireEvent.change(screen.getByPlaceholderText("Enter email"), {
      target: { value: "john@test.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter password"), {
      target: { value: "john@123" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith("/dashboard");
    });
  });

  test("failed login shows error message", async () => {
    mock.onPost("/auth/login").reply(401, {
      message: "Invalid credentials",
    });

    render(<Login />, { wrapper: Wrapper });

    fireEvent.change(screen.getByPlaceholderText("Enter email"), {
      target: { value: "test@test.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter password"), {
      target: { value: "testpass" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(screen.getByText("Invalid credentials")).toBeInTheDocument();
    });
  });
});
