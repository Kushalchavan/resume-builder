import axiosInstance from "./api";

interface SignupData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const signupUser = async (data: SignupData) => {
  const res = await axiosInstance.post("/auth/signup", data);
  return res.data;
};
export const loginUser = async (data: LoginData) => {
  const res = await axiosInstance.post("/auth/login", data);
  return res.data;
};
export const currentUser = async () => {
  const res = await axiosInstance.get("/auth/check-auth");
  return res.data;
};
export const logoutUser = async () => {
  const res = await axiosInstance.post("/auth/logout");
  return res.data;
};
