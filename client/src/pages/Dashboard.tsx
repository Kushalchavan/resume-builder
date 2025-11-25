import {
  CloudUpload,
  FilePenLineIcon,
  PencilIcon,
  Plus,
  TrashIcon,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { useEffect, useState } from "react";
import CreateResumeModal from "../components/modals/CreateResumeModal";
import UploadResumeModal from "../components/modals/UploadResumeModal";
import { useNavigate } from "react-router";
import EditResumeModel from "../components/modals/EditResumeModel";
import {
  createResume,
  deleteResume,
  getAllResumes,
  updateResumeTitle,
  uploadResume,
} from "../api/resumeApi";
import type { ResumeData } from "../types/resume";
import { toast } from "sonner";

const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];

const Dashboard = () => {
  const [showCreateResume, setShowCreateResume] = useState<boolean>(false);
  const [showUploadResume, setShowUploadResume] = useState<boolean>(false);
  const [allResumes, setAllResumes] = useState<ResumeData[]>([]);
  const [title, setTitle] = useState<string>("");
  const [editResumeId, setEditResumeId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const loadAllResumes = async () => {
    try {
      setIsLoading(true);
      const res = await getAllResumes();
      setAllResumes(res.resumes || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  const createNewResume = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await createResume(title);
      setShowCreateResume(false);
      setTitle("");
      navigate(`/builder/${res.resume._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("pdf", file);
      formData.append("title", title);

      await uploadResume(formData);

      setShowUploadResume(false);
      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  const editTitle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateResumeTitle(editResumeId, title);
      setAllResumes(
        allResumes.map((resume) =>
          resume._id === editResumeId ? { ...resume, title } : resume
        )
      );
      setEditResumeId("");
      setTitle("");
      toast.success("Title updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (resumeId: string) => {
    try {
      await deleteResume(resumeId);
      setAllResumes((prev) => prev.filter((r) => r._id !== resumeId));
      toast.success("Resume deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mt-4 py-4 px-6 md:px-16 lg:px-24 xl:px-40">
        <h4 className="mb-6">Start Creating</h4>

        <div className="flex gap-5">
          <Card
            onClick={() => setShowCreateResume(true)}
            className="w-full md:w-55 md:h-40 rounded-md flex flex-col items-center justify-center gap-2  cursor-pointer hover:shadow-md  bg-linear-to-tr from-blue-100/10 to-indigo-300 hover:to-indigo-400 dark:from-indigo-900/40 dark:to-indigo-800 hover:dark:to-indigo-700 transition-colors duration-200"
          >
            <button className="p-2 bg-gray-100/30 rounded-md cursor-pointer">
              <span>
                <Plus className="text-muted-foreground" />
              </span>
            </button>
            <span>New Resume</span>
          </Card>

          <Card
            onClick={() => setShowUploadResume(true)}
            className="w-full md:w-55 md:h-40 rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-md 
      bg-linear-to-tr from-blue-100/10 to-blue-300 hover:to-blue-400 
      dark:from-blue-900/40 dark:to-blue-800 hover:dark:to-blue-700 
      transition-colors duration-200"
          >
            <button className="p-2 bg-gray-100/30 rounded-md cursor-pointer">
              <span>
                <CloudUpload className="text-muted-foreground" />
              </span>
            </button>
            <span>Upload Existing</span>
          </Card>
        </div>

        <hr className="border-slate-300 my-6 sm:w-[305px]" />

        <div className="grid grid-cols2 sm:flex flex-wrap gap-4">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];

            return (
              <button
                onClick={() => navigate(`/builder/${resume._id}`)}
                key={index}
                className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + "40",
                }}
              >
                <FilePenLineIcon
                  className="size-7 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />
                <p
                  className="text-sm group-hover:scale-105 transition-all px-2 text-center"
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>
                <p
                  className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center"
                  style={{ color: baseColor + "90" }}
                >
                  Updated on{" "}
                  {new Date(resume.updatedAt ?? "").toLocaleDateString()}
                </p>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-1 right-1 group-hover:flex items-center hidden"
                >
                  <TrashIcon
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                    onClick={() => handleDelete(resume._id)}
                  />
                  <PencilIcon
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                    onClick={() => {
                      setEditResumeId(resume._id);
                      setTitle(resume.title);
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {showCreateResume && (
        <CreateResumeModal
          setShowCreateResume={setShowCreateResume}
          title={title}
          setTitle={setTitle}
          handleSubmit={createNewResume}
        />
      )}

      {showUploadResume && (
        <UploadResumeModal
          setShowUploadResume={setShowUploadResume}
          title={title}
          setTitle={setTitle}
          handleUpload={handleUpload}
          isLoading={isLoading}
        />
      )}

      {editResumeId && (
        <EditResumeModel
          setEditResumeId={setEditResumeId}
          title={title}
          setTitle={setTitle}
          handleSubmit={editTitle}
        />
      )}
    </div>
  );
};
export default Dashboard;
