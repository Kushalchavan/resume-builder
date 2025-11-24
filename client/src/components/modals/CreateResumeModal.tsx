import { XIcon } from "lucide-react";
import { Input } from "../ui/input";

interface CreateResumeModalProps {
  setShowCreateResume: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const CreateResumeModal = ({
  setShowCreateResume,
  title,
  setTitle,
  handleSubmit,
}: CreateResumeModalProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="fixed inset-0 bg-black/40 backdrop-blur bg-opacity-50 z-10 flex  items-center justify-center"
    >
      <div className="relative bg-background border shadow-md rounded-lg w-full max-w-sm p-6">
        <h2 className="text-xl font-bold mb-4">Create a Resume</h2>

        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter resume title"
          className="w-full px-4 py-2 flex items-center justify-center"
          required
        />

        <button className="mt-4 w-full py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition-colors cursor-pointer">
          Create Resume
        </button>

        <XIcon
          onClick={() => setShowCreateResume(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
        />
      </div>
    </form>
  );
};
export default CreateResumeModal;
