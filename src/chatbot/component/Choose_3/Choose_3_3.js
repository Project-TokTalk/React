import React from "react";

const Choose_3_3 = (props) => {
  const choose_3_3 = [
    {
      text: "기업정보 입력 오류",
      handler: props.actionProvider.choose_3_3_1,
      id: "기업정보 입력이 안됩니다.",
    },
    {
      text: "이전 단계",
      handler: props.actionProvider.choose_3,
      id: "이전 단계",
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
  };

  const makeBtn = choose_3_3.map((btn) => (
    <button
      key={btn.id}
      onClick={() => handleClick(btn.handler, btn.id)}
      className="m-1 flex rounded-full border bg-white p-2 text-center text-sm"
    >
      {btn.text}
    </button>
  ));

  return (
    <div className="w-full overflow-x-hidden whitespace-nowrap">
      <div className="z-30 flex flex-row overflow-x-auto">{makeBtn}</div>
    </div>
  );
};

export default Choose_3_3;
