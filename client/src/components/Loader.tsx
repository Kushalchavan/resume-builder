import { Spinner } from "./ui/spinner";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Spinner className=""/>
    </div>
  );
};
export default Loader;
