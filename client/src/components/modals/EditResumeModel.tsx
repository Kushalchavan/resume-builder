import { XIcon } from "lucide-react";

interface EditResumeModelProps {
  setEditResumeId: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const EditResumeModel = ({
  setEditResumeId,
  title,
  setTitle,
  handleSubmit,
}: EditResumeModelProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      onClick={() => setEditResumeId("")}
      className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
      >
        <h2 className="text-xl font-bold mb-4">Edit Resume Title</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter resume title"
          className="w-full px-4 py-2 flex items-center justify-center"
          required
        />
        <button className="mt-4 w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
          Update
        </button>
        <XIcon
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
          onClick={() => {
            setEditResumeId("");
            setTitle("");
          }}
        />
      </div>
    </form>
  );
};
export default EditResumeModel;
