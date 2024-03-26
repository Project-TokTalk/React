import { Link } from "react-router-dom";

const InitPage = () => {
  return (
    <div className="grid h-screen grid-rows-2">
      <div className="flex w-full items-end justify-center">
        <div className="m-8 flex items-end justify-center text-xl font-extrabold">
          <div>저희 서비스를 이용해보셨나요?</div>
        </div>
      </div>
      <div className="flex w-full grid-cols-2">
        <div className="m-5 mr-7 flex w-1/2 justify-end">
          <Link
            to={"/signin"}
            className="flex h-14 w-24 items-center justify-center rounded-md border border-gray-300 bg-gray-100 p-3 text-sm font-semibold  leading-6 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <div className="flex flex-col items-center">
              <div>네</div>
              <div>YES</div>
            </div>
          </Link>
        </div>
        <div className="m-5 ml-7 flex w-1/2">
          <Link
            to={"/signup"}
            className="flex h-14 w-24 items-center justify-center rounded-md border border-gray-300 bg-gray-100 p-3 text-sm font-semibold  leading-6 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <div className="flex flex-col items-center">
              <div>아니요</div>
              <div>NO</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InitPage;
