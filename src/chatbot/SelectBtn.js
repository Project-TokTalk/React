import React, { useEffect, useState } from "react";

const SelectBtn = () => {
  const [imageUrl, setImageUrl] = useState("");
  const IdList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {}, []);

  // 버튼에 각각 연결하면 됨
  // 테이블하고 포멧 비슷하게 했으니 보기 편하겟지
  // 버튼 간 구분은 key값을 통해 하면 될 듯
  return (
    <div className="w-4/5 overflow-x-hidden">
      <div className="wrap-content flex w-full overflow-x-auto">
        <div className="button-container flex flex-row">
          {IdList.map((id_button) => (
            <>
              <button
                key={id_button}
                className="mx-2 mt-3 h-6 w-20 items-center justify-center rounded-md bg-gray-700 p-1 text-xs text-white "
              >
                {/* 약간의 공백을 주기 위해 나눔 */}
                <div className="overflow-hidden">{id_button}</div>
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectBtn;
