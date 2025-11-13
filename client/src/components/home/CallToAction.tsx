import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const CallToAction = () => {
  return (
    <div
      id="cta"
      className="border-y border-dashed border-muted w-full max-w-5xl mx-auto px-10 sm:px-16 mt-30"
    >
      <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-muted py-16 sm:py-20 -mt-10 -mb-10 w-full">
        <p className="text-xl font-medium max-w-md text-muted-foreground">
          Build a Professional Resume That Helps You stand Out and Get Hired
        </p>
        <Link
          to="/login"
          className="flex items-center gap-2 rounded py-3 px-8 bg-indigo-600 hover:bg-indigo-700 transition text-white"
        >
          <span>Get Started</span>
          <ArrowRight className="stroke-1.4 size-5" />
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
