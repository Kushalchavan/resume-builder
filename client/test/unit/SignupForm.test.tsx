import Signup from "@/pages/auth/Signup";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("Signup page UI", () => {
  test("renders username, email and password inputs", () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
  });
});
