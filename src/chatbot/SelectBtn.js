import React, { useEffect, useState } from "react";

const SelectBtn = ({ onDataFromSelectBtn }) => {
  const [imageUrl, setImageUrl] = useState("");
  const IdList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {}, []);

  const handleButtonClick = (id) => {
    // 버튼을 클릭했을 때의 동작을 정의합니다.
    console.log(`Button ${id} clicked`);
    // 다른 동작을 수행할 수도 있습니다.
    onDataFromSelectBtn(id);
  };

  return (
    <div className="w-4/5 overflow-x-hidden">
      <div className="wrap-content flex w-full overflow-x-auto">
        <div className="button-container flex flex-row">
          {IdList.map((id_button) => (
            <button
              key={id_button}
              className="mx-2 mt-3 h-6 w-20 items-center justify-center rounded-md bg-gray-700 p-1 text-xs text-white"
              onClick={() => handleButtonClick(id_button)}
            >
              <div className="overflow-hidden">{id_button}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectBtn;
