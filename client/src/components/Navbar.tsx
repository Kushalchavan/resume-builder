import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm border-b ">
      <h2 className="text-indigo-600 font-semibold text-xl">EvolveCv</h2>

      <div className="flex items-center gap-3">
        <ModeToggle/>
        <button className="px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-muted-foreground hover:text-slate-900 cursor-pointer">
          logout
        </button>
      </div>
    </div>
  );
};
export default Navbar;
