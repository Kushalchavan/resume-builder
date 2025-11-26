import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { enhanceProfessionalSummary } from "../../../api/aiApi";
import type { ResumeData } from "../../../types/resume";

type ProfessionalSummaryFormProps = {
  data: string;
  onChange: (value: string) => void;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
};

const ProfessionalSummaryForm = ({
  data,
  onChange,
  setResumeData,
}: ProfessionalSummaryFormProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSummary = async () => {
    try {
      setIsGenerating(true);

      const res = await enhanceProfessionalSummary(data);
      const enhanced = res.enhanceContent;

      onChange(enhanced);

      setResumeData((prev) => ({
        ...prev,
        professional_summary: enhanced,
      }));

      toast.success("Summary Enhanced!");
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            Professional Summary
          </h3>
          <p className="text-sm text-gray-500">
            Add summary for your resume here
          </p>
        </div>

        <button
          disabled={isGenerating}
          onClick={generateSummary}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50 cursor-pointer"
        >
          {isGenerating ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Sparkles className="size-4" />
          )}
          {isGenerating ? "Enhancing..." : "AI Enhance"}
        </button>
      </div>

      <div className="mt-6">
        <textarea
          value={data || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          className="w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
          placeholder="Write a compelling professional summary..."
        />

        <p className="text-xs text-gray-500 mt-1">
          Tip: Keep it concise (3–4 sentences). Focus on strengths & key
          achievements.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalSummaryForm;
