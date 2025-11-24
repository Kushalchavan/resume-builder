import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { ArrowLeft } from "lucide-react";
import ResumePreview from "../components/resume/ResumePreview";
import axiosInstance from "../api/api";
import type { ResumeData } from "../types/resume";

const Preview = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { resumeId } = useParams();

  const loadResume = async () => {
    try {
      const { data } = await axiosInstance.get(
        "/api/resumes/public" + resumeId
      );
      setResumeData(data.resume);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadResume();
  }, [resumeId]);

  return resumeData ? (
    <div className="bg-slate-100">
      <div className="max-w-3xl mx-auto py-10">
        <ResumePreview
          data={resumeData}
          template={resumeData.template}
          accentColor={resumeData.accent_color}
          classes="py-4 bg-white"
        />
      </div>
    </div>
  ) : (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <p className="text-center text-6xl text-slate-400 font-medium">
            Resume not found
          </p>
          <a
            href="/"
            className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-green-400 flex items-center transition-colors"
          >
            <ArrowLeft className="mr-2 size-4" /> go to home page
          </a>
        </div>
      )}
    </div>
  );
};
export default Preview;
