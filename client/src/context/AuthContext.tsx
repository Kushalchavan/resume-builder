import { createContext, useContext, useState, useEffect } from "react";
import { currentUser, loginUser, logoutUser } from "../api/authApi";
import { setupAxiosInterceptors } from "../api/interceptors";

interface User {
  _id: string;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
  login : (data: any) => Promise<void>;
  signup: (data: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setupAxiosInterceptors(() => setUser(null));
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await currentUser();
        setUser(data.user);
      } catch (error) {
        console.log("Error fetchuser", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (data) => {
  const res = await loginUser(data);
  setUser(res.user);
};

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (error) {
      console.log("Logout error", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, setUser, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
