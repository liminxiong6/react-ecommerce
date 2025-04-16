import { RotatingLines } from "react-loader-spinner";

const Loader = ({ text }) => {
  return (
    <div className="flex h-[450px] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-1">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <p className="text-slate-800">{text ? text : "Please wait...."}</p>
      </div>
    </div>
  );
};

export default Loader;
