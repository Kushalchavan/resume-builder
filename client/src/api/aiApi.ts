import axiosInstance from "./api";

export const enhanceProfessionalSummary = async (userContent: string) => {
  const res = await axiosInstance.post("/ai/enhance-pro-sum", { userContent });
  return res.data;
};

export const enhanceJobDescription = async (userContent: string) => {
  const res = await axiosInstance.post("/ai/enhance-pro-desc", { userContent });
  return res.data;
};
