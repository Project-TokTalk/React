import React from "react";

const Choose_1 = (props) => {
  const choose_1_btn = [
    {
      text: "관련 법령",
      handler: props.actionProvider.choose_1_1,
      id: "창업기업에 해당하는지 알고 싶습니다.",
    },
    {
      text: "이의신청",
      handler: props.actionProvider.choose_1_2,
      id: "이의신청",
    },
    {
      text: "증빙서류 발급",
      handler: props.actionProvider.choose_1_3,
      id: "증빙서류 발급",
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
  };

  const makeBtn = choose_1_btn.map((btn) => (
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

export default Choose_1;
