import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./pages/Layout";
import ResumeBuilder from "./pages/ResumeBuilder";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            {/* <Route
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            > */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="builder/:resumeId" element={<ResumeBuilder />} />
            {/* </Route> */}
          </Routes>
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
export default App;
