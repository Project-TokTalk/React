const MemberControl = () => {
  return (
    <nav id="navbar2" className="flex">
      <div className="flex h-full w-full justify-between pt-3">
        <div className="flex items-center p-10 pb-6 text-3xl" style={{fontFamily: "JalnanGothic"}}>
          회원관리
        </div>
        <div className="flex h-full w-1/6 items-end pb-3">
          <div className="flex h-2/5 w-full items-center rounded-md border border-gray-300 bg-white pr-2">
            {/* 검색란 추가 */}

            <input
              className="flex h-full w-full rounded-md border border-hidden border-gray-300 pl-5"
              placeholder="Enter"
            ></input>
            <button className="pl-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MemberControl;
