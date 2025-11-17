import { CloudUpload, Plus } from "lucide-react";
import Navbar from "../components/Navbar";
import { Card } from "../components/ui/card";
import { useState } from "react";
import CreateResumeModal from "../components/modals/CreateResumeModal";
import UploadResumeModal from "../components/modals/UploadResumeModal";

const Dashboard = () => {
  const [showCreateResume, setShowCreateResume] = useState<boolean>(false);
  const [showUploadResume, setShowUploadResume] = useState<boolean>(false);

  return (
    <div>
      <Navbar />
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
      </div>

      {showCreateResume && (
        <CreateResumeModal setShowCreateResume={setShowCreateResume} />
      )}

      {showUploadResume && (
        <UploadResumeModal setShowUploadResume={setShowUploadResume} />
      )}
    </div>
  );
};
export default Dashboard;
