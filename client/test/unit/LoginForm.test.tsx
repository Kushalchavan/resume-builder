import { MemoryRouter } from "react-router";
import Login from "../../src/pages/auth/Login";
import { render, screen } from "@testing-library/react";

describe("Login Page UI", () => {
  test("renders input and password inputs", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
  });
});
