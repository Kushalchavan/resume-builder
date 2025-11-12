import axiosInstance from "./api";

interface SignupData{
    username: string;
    email: string;
    password: string;
}

interface LoginData {
    email: string;
    password: string;
}


export const signupUser = (data: SignupData) => axiosInstance.post("/auth/signup", data);
export const loginUser = (data: LoginData) => axiosInstance.post("/auth/login", data);
export const currentUser = () => axiosInstance.get("/auth/check-auth");