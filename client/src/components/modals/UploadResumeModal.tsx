import { UploadCloud, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { Spinner } from "../ui/spinner";

interface UploadResumeModalProps {
  setShowUploadResume: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: (value: string) => void;
  handleUpload: (file: File) => Promise<void>;
  isLoading: boolean;
}

const UploadResumeModal = ({
  setShowUploadResume,
  title,
  setTitle,
  handleUpload,
  isLoading,
}: UploadResumeModalProps) => {
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a PDF file");
      return;
    }
    await handleUpload(file);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="fixed inset-0 bg-black/40 backdrop-blur z-10 flex items-center justify-center"
    >
      <div className="relative bg-background border shadow-md rounded-lg w-full max-w-sm p-6">
        <h2 className="text-xl font-bold mb-4">Upload Resume</h2>

        {/* Resume Title */}
        <Input
          type="text"
          placeholder="Enter resume title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2"
          required
        />

        {/* File Upload */}
        <div className="mt-5">
          <label
            htmlFor="resume-input"
            className="block text-sm text-muted-foreground cursor-pointer"
          >
            Select resume file
            <div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 mt-3 hover:border-indigo-500 hover:text-indigo-700 transition-colors">
              <UploadCloud className="size-14 stroke-1" />
              <p>{file ? file.name : "Upload PDF"}</p>
            </div>
          </label>

          <input
            type="file"
            id="resume-input"
            accept=".pdf"
            hidden
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition-colors"
        >
          {isLoading && <Spinner />}
          {isLoading ? "Uploading..." : "Upload Resume"}
        </button>

        <XIcon
          onClick={() => setShowUploadResume(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default UploadResumeModal;
