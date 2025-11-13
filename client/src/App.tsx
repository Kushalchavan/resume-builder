import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Toaster />
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;
