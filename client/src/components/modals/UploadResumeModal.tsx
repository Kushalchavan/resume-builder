import { UploadCloud, XIcon } from "lucide-react";
import { Input } from "../ui/input";

interface UploadResumeModalProps {
  setShowUploadResume: React.Dispatch<React.SetStateAction<boolean>>;
}

const UploadResumeModal = ({ setShowUploadResume }: UploadResumeModalProps) => {
  return (
    <form className="fixed inset-0 bg-black/40 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
      <div className="relative bg-background border shadow-md rounded-lg w-full max-w-sm p-6">
        <h2 className="text-xl font-bold mb-4">Upload Resume</h2>

        <Input
          type="text"
          placeholder="Enter resume title"
          className="w-full px-4 py-2 flex items-center justify-center"
          required
        />

        <div className="mt-5">
          <label
            htmlFor="resume-input"
            className="block text-sm text-muted-foreground"
          >
            Select resume file
            <div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-indigo-500 hover:text-indigo-700 cursor-pointer transition-colors">
              <UploadCloud className="size-14 stroke-1" />
              <p>Upload resume</p>
            </div>
          </label>
          <input type="file" id="resume-input" accept=".pdf" hidden />
        </div>

        <button className="mt-4 w-full py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition-colors cursor-pointer">
          Upload Resume
        </button>

        <XIcon
          onClick={() => setShowUploadResume(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
        />
      </div>
    </form>
  );
};
export default UploadResumeModal;
