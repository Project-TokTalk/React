import React from "react";

const Choose_3_4 = (props) => {
  const Choose_3_4 = [
    {
      text: "정보 수정",
      handler: props.actionProvider.choose_3_4_1,
      id: "기업정보 수정방법이 궁금합니다.",
    },
    {
      text: "제품정보",
      handler: props.actionProvider.choose_3_4_2,
      id: "제품등록은 어떻게 하나요.",
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

  const makeBtn = Choose_3_4.map((btn) => (
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

export default Choose_3_4;
