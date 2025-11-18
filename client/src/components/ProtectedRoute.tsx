import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Spinner } from "./ui/spinner";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <p className="h-screen w-screen flex justify-center items-center">
        <Spinner />
      </p>
    );

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
