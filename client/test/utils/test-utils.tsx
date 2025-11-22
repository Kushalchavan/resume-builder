// test/test-utils.tsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { vi } from "vitest";

export const mockLogin = vi.fn();
export const mockSignup = vi.fn();
export const mockLogout = vi.fn();

export const AuthProviderMock = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider
    value={{
      user: null,
      login: mockLogin,
      signup: mockSignup,
      logout: mockLogout,
    }}
  >
    {children}
  </AuthProvider>
);

export const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <AuthProviderMock>{children}</AuthProviderMock>
  </BrowserRouter>
);
