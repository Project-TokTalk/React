import React from "react";

const Choose_1_3 = (props) => {
  const choose_1_3 = [
    {
      text: "발급기한",
      handler: props.actionProvider.choose_1_3_1,
      id: "모든 제출서류는 3개월 이내여야 하나요?",
    },
    {
      text: "사업자등록증",
      handler: props.actionProvider.choose_1_3_2,
      id: "사업자등록증과 사업자등록증명은 다른가요?",
    },
    {
      text: "이전 단계",
      handler: props.actionProvider.choose_1,
      id: "이전 단계",
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
  };

  const makeBtn = choose_1_3.map((btn) => (
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
      <div className="flex z-30 flex-row overflow-x-auto">{makeBtn}</div>
    </div>
  );
};
export default Choose_1_3;
