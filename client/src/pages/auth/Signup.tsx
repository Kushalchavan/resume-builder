import { Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../api/authApi";
import { toast } from "sonner";
import type z from "zod";
import { signupSchema } from "../../schemas/authSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type SignupFormInputs = z.infer<typeof signupSchema>;

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const handleSignup = async (data: SignupFormInputs) => {
    try {
      await signupUser(data);
      navigate("/dashboard");
      toast.success("Signup successfully");
    } catch (error) {
      console.error(error);
      toast.error("Sign Up failed");
    }
  };

  return (
    <div className="flex h-[700px] w-full">
      <div className="w-full hidden md:inline-block">
        <img
          className="h-full"
          src="https://i.pinimg.com/1200x/b0/97/54/b09754252d191d9c8640660342d727ff.jpg"
          alt="leftSideImage"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="md:w-96 w-80 flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl text-primary font-medium">Sign Up</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Welcome! Please sign up to continue
          </p>

          <button
            type="button"
            className="w-full mt-8 bg-gray-200/10 flex items-center justify-center h-12 rounded-full"
          >
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
              alt="googleLogo"
            />
          </button>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              or sign in with email
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <User className="stroke-1" />
            <input
              type="text"
              {...register("username")}
              placeholder="Enter name"
              className="bg-transparent text-muted-foreground placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
            {errors.username && (
              <p className="text-xs text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="flex mt-6 items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <Mail className="stroke-1" />
            <input
              type="email"
              {...register("email")}
              placeholder="Enter email"
              className="bg-transparent text-muted-foreground placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <Lock className="stroke-1" />
            <input
              type="password"
              {...register("password")}
              placeholder="Enter password"
              className="bg-transparent text-muted-foreground placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity cursor-pointer"
          >
            Sign Up
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            Already have an account?{" "}
            <Link
              className="text-indigo-400 hover:underline font-semibold"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Signup;
