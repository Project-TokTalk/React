const UnsolvedHeader = () => {
    return (
      <nav id="navbar2" className=" flex bg-blue-300 ml-10">
        <div className="flex h-full w-4/5 items-center bg-gray-500">
          <div className="flex p-3 px-5 text-3xl font-bold text-white">
            미응답 질문
          </div>
        </div>
        <div className="flex w-1/5 justify-end bg-orange-300 p-4 font-medium">
        </div>
      </nav>
    );
  };
  
  export default UnsolvedHeader;