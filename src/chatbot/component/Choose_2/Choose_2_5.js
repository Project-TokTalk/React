import React from "react";

const Choose_2_5 = (props) => {
  const choose_2_5 = [
    {
      text: "창업이력 작성",
      handler: props.actionProvider.choose_2_5_1,
      id: "창업이력에는 무엇을 써야하나요?",
    },
    {
      text: "창업이력 변경사항",
      handler: props.actionProvider.choose_2_5_2,
      id: "창업이력 중 공동사업자 탈퇴한 내역이 있습니다.",
    },
    {
      text: "상호명 없음",
      handler: props.actionProvider.choose_2_5_3,
      id: "창업이력 중 상호명이 없는 사업장 기입은 어떻게 하나요?",
    },
    {
      text: "공동대표",
      handler: props.actionProvider.choose_2_5_4,
      id: "대표자가 두명인데 한명만 입력하면 되나요?",
    },
    {
      text: "공공마이데이터",
      handler: props.actionProvider.choose_2_5_5,
      id: "공공마이데이터 방식에 대해 문의드립니다.",
    },
    {
      text: "수기제출",
      handler: props.actionProvider.choose_2_5_6,
      id: "수기제출 방식에 대해 문의드립니다.",
    },
    {
      text: "업종코드 확인방법",
      handler: props.actionProvider.choose_2_5_7,
      id: "업종코드는 어떻게 확인하나요?",
    },
    {
      text: "이전 단계",
      handler: props.actionProvider.choose_2,
      id: "이전 단계",
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
    window.scrollTo(0, document.body.scrollHeight); // 화면 하단으로 스크롤 이동
  };

  const makeBtn = choose_2_5.map((btn) => (
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

export default Choose_2_5;
