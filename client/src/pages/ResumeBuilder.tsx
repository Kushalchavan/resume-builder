import { ArrowLeftIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { sections } from "../constants/data";
import TemplateSelector from "../components/resume/TemplateSelector";
import ColorPicker from "../components/resume/ColorPicker";
import PersonalInfoForm from "../components/resume/forms/PersonalInfoForm";
import ProfessionalSummaryForm from "../components/resume/forms/ProfessionalSummaryForm";
import ExperienceForm from "../components/resume/forms/ExperienceForm";
import EducationForm from "../components/resume/forms/EducationForm";
import ProjectForm from "../components/resume/forms/ProjectForm";
import SkillsForm from "../components/resume/forms/SkillsForm";
import { toast } from "sonner";

type Experience = {
  company: string;
  position: string;
  start_date: string;
  end_date: string;
  description: string;
  is_current: boolean;
};

export type Education = {
  institution: string;
  degree: string;
  field: string;
  graduation_date: string;
  gpa?: string;
};

export type Project = {
  name: string;
  type: string;
  description: string;
};

type ResumeData = {
  _id: string;
  title: string;
  personal_info: {};
  professional_summary: string;
  experience: Experience[];
  education: Education[];
  project: Project[];
  skills: string[];
  template: string;
  accent_color: string;
  public: boolean;
};

const ResumeBuilder = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const [resumeData, setResumeData] = useState<ResumeData>({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3b82f6",
    public: false,
  });
  const [removeBackground, setRemoveBackground] = useState<boolean>(false);

  const activeSection = sections[activeSectionIndex];
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          to="/dashboard"
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
        >
          <ArrowLeftIcon className="size-4" /> Back to Dashboard
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Panel */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <div className="rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
              {/* progress bar using active section index */}
              <hr className="absolute top-0 left-0 right-0 border-2 border-muted" />
              <hr
                className="absolute top-0 left-0 h-1 bg-linear-to-r from-indigo-500 to-indigo-600 border-none transition-all duration-200"
                style={{
                  width: `${
                    (activeSectionIndex * 100) / (sections.length - 1)
                  }%`,
                }}
              />

              {/* Section navigation */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
                <div className="flex items-center gap-2">
                  <TemplateSelector
                    selectedTemplate={resumeData.template}
                    onChange={(template) =>
                      setResumeData((prev) => ({ ...prev, template }))
                    }
                  />

                  <ColorPicker
                    selectedColor={resumeData.accent_color}
                    onChange={(color) =>
                      setResumeData((prev) => ({
                        ...prev,
                        accent_color: color,
                      }))
                    }
                  />
                </div>
                <div className="flex items-center">
                  {activeSectionIndex !== 0 && (
                    <button
                      onClick={() =>
                        setActiveSectionIndex((prevIndex) =>
                          Math.max(prevIndex - 1, 0)
                        )
                      }
                      className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all"
                      disabled={activeSectionIndex === 0}
                    >
                      <ChevronLeft className="size-4" /> Previous
                    </button>
                  )}

                  <button
                    className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${
                      activeSectionIndex === sections.length - 1 && "opacity-50"
                    }`}
                    onClick={() =>
                      setActiveSectionIndex((prevIndex) =>
                        Math.min(prevIndex + 1, sections.length - 1)
                      )
                    }
                    disabled={activeSectionIndex === sections.length - 1}
                  >
                    Next <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>

              {/* Form content */}
              <div className="space-y-6">
                {activeSection.id === "personal" && (
                  <PersonalInfoForm
                    data={resumeData.personal_info}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        personal_info: data,
                      }))
                    }
                    removeBackground={removeBackground}
                    setRemoveBackground={setRemoveBackground}
                  />
                )}

                {activeSection.id === "summary" && (
                  <ProfessionalSummaryForm
                    data={resumeData.professional_summary}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        professional_summary: data,
                      }))
                    }
                    setResumeData={setResumeData}
                  />
                )}

                {activeSection.id === "experience" && (
                  <ExperienceForm
                    data={resumeData.experience}
                    onChange={(data) =>
                      setResumeData((prev) => ({ ...prev, experience: data }))
                    }
                  />
                )}

                {activeSection.id === "education" && (
                  <EducationForm
                    data={resumeData.education}
                    onChange={(data) =>
                      setResumeData((prev) => ({ ...prev, education: data }))
                    }
                  />
                )}

                {activeSection.id === "projects" && (
                  <ProjectForm
                    data={resumeData.project}
                    onChange={(data) =>
                      setResumeData((prev) => ({ ...prev, project: data }))
                    }
                  />
                )}

                {activeSection.id === "skills" && (
                  <SkillsForm
                    data={resumeData.skills}
                    onChange={(data) =>
                      setResumeData((prev) => ({ ...prev, skills: data }))
                    }
                  />
                )}
              </div>
              <button
                onClick={() => {
                  toast.promise(saveResume, { loading: "Saving..." });
                }}
                className="bg-linear-to-br from-indigo-100 to-indigo-200 ring-indigo-300 text-indigo-600 ring:hover:indigo-400 transition-all rounded-md px-6 py-2 mt-6 text-sm cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>

          {/* Right Panel */}
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default ResumeBuilder;
