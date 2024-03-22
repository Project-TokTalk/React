import { Link } from "react-router-dom";

const InitPage = () => {
  return (
    <div className="grid h-screen grid-rows-3">
      <div className="flex w-full items-end justify-center">
        <div className="m-10 text-5xl font-bold">
          ㅡㅡ 디자인 너무 어려워요 ㅠ <br />
          저희 서비스를 이용해보셨나요?
        </div>
      </div>
      <div className="flex w-full grid-cols-2">
        <div className="m-14 flex w-1/2 justify-end">
          <Link
            to={"/login"}
            className="mr-10 flex h-24 w-1/4 items-center justify-center rounded-md bg-indigo-300 p-3 text-sm font-semibold leading-6 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <div className="flex flex-col items-center">
              <div>네</div>
              <div>YES</div>
            </div>
          </Link>
        </div>
        <div className="m-14 flex w-1/2">
          <Link
            to={"/signin"}
            className="ml-10 flex h-24 w-1/4 items-center justify-center rounded-md bg-indigo-300 p-3 text-sm font-semibold leading-6 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
