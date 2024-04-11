import React from "react";

const Choose_3 = (props) => {
  const choose_3_btn = [
    {
      text: "회원가입",
      handler: props.actionProvider.choose_3_1,
      id: "회원가입",
    },
    {
      text: "창업이력",
      handler: props.actionProvider.choose_3_2,
      id: "창업이력",
    },
    {
      text: "시스템 오류",
      handler: props.actionProvider.choose_3_3,
      id: "시스템 오류",
    },
    {
      text: "기업정보등록",
      handler: props.actionProvider.choose_3_4,
      id: "기업정보등록",
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
  };

  const makeBtn = choose_3_btn.map((btn) => (
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

export default Choose_3;
