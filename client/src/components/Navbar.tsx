import { toast } from "sonner";
import { ModeToggle } from "./mode-toggle";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("User Logout successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Failed to Logout user");
    }
  };

  return (
    <div className="w-full flex items-center justify-between py-3 px-6 md:px-16 lg:px-24 xl:px-40 text-sm border-b">
      <h2 className="text-indigo-600 font-semibold text-xl">EvolveCv</h2>

      <div className="flex items-center gap-3">
        <ModeToggle />
        <button
          onClick={handleLogout}
          className="px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-muted-foreground hover:text-slate-900 cursor-pointer"
        >
          logout
        </button>
      </div>
    </div>
  );
};
export default Navbar;
