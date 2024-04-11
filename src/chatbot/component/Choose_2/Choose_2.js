import React from "react";

const Choose_2 = (props) => {
  const choose_2_btn = [
    {
      text: "발급방법",
      handler: props.actionProvider.choose_2_1,
      id: "발급방법",
    },
    {
      text: "문의사항",
      handler: props.actionProvider.choose_2_2,
      id: "문의사항",
    },
    {
      text: "확인서 수정",
      handler: props.actionProvider.choose_2_3,
      id: "확인서 수정",
    },
    {
      text: "확인서 반납",
      handler: props.actionProvider.choose_2_4,
      id: "확인서 반납",
    },
    {
      text: "신청서 작성",
      handler: props.actionProvider.choose_2_5,
      id: "신청서 작성",
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
    window.scrollTo(0, document.body.scrollHeight);
  };

  const makeBtn = choose_2_btn.map((btn) => (
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

export default Choose_2;
