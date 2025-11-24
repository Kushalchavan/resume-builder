import type { ResumeData } from "../types/resume";
import axiosInstance from "./api";

export const createResume = async (title: string) => {
  const res = await axiosInstance.post("/resumes/create", { title });
  return res.data;
};

export const getAllResumes = async () => {
  const res = await axiosInstance.get("/resumes/get");
  return res.data;
};

export const getResumeById = async (resumeId: string) => {
  const res = await axiosInstance.get(`/resumes/get/${resumeId}`);
  return res.data;
};

export const getPublicResumeById = async (
  resumeId: string,
  isPublic: boolean
) => {
  const res = await axiosInstance.patch(`/resumes/public/${resumeId}`, {
    public: isPublic,
  });
  return res.data;
};

export const updateResumeTitle = async (id: string, title: string) => {
  const res = await axiosInstance.put("/resumes/update/title", {
    resumeId: id,
    title,
  });
  return res.data;
};

export const updateResume = async (
  resumeId: string,
  resumeData: ResumeData,
  image?: File | null,
  removeBackground?: boolean
) => {
  const formData = new FormData();

  formData.append("resumeId", resumeId);
  formData.append("resumeData", JSON.stringify(resumeData));

  if (image) formData.append("image", image);
  if (removeBackground !== undefined)
    formData.append("removeBackground", String(removeBackground));

  const res = await axiosInstance.put(`/resumes/update/${resumeId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const uploadResume = async (formData: FormData) => {
  const res = await axiosInstance.post("/resumes/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const deleteResume = async (resumeId: string) => {
  const res = await axiosInstance.delete(`/resumes/delete/${resumeId}`);
  return res.data;
};
