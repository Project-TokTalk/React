import React from "react";

const Choose_2_4 = (props) => {
  const choose_2_4 = [
    {
      text: "업종변경",
      handler: props.actionProvider.choose_2_4_1,
      id: "업종변경이 되었습니다.",
    },
    {
      text: "대표자 변경",
      handler: props.actionProvider.choose_2_4_2,
      id: "대표자가 변경되었습니다.",
    },
    {
      text: "이전 단계",
      handler: props.actionProvider.choose_2,
      id: "이전 단계",
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
    window.scrollTo(0, document.body.scrollHeight);
  };

  const makeBtn = choose_2_4.map((btn) => (
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

export default Choose_2_4;
