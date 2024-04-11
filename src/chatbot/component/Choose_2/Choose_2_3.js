import React from "react";

const Choose_2_3 = (props) => {
  const choose_2_3 = [
    {
      text: "기업명 변경",
      handler: props.actionProvider.choose_2_3_1,
      id: "창업기업 확인서 기업명 변경이 필요합니다.",
    },
    {
      text: "주소변경",
      handler: props.actionProvider.choose_2_3_2,
      id: "사업장 주소지가 변경되었습니다.",
    },
    {
      text: "제출 신청서 수정",
      handler: props.actionProvider.choose_2_3_3,
      id: "창업기업 심사 중 수정이 가능한가요?",
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

  const makeBtn = choose_2_3.map((btn) => (
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

export default Choose_2_3;
