import React, { useEffect, useRef } from "react";

const Choose_3_2 = (props) => {
  const choose_3_2 = [
    {
      text: "증빙서류 제출",
      handler: props.actionProvider.choose_3_2_1,
      id: "등기사항전부증명서와 신청기업의 등기사항전부증명서의 차이가 무엇인가요?",
    },
    {
      text: "업종관계 확인",
      handler: props.actionProvider.choose_3_2_2,
      id: "동종업종과 이종업종의 차이가 궁금합니다.",
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

  const makeBtn = choose_3_2.map((btn) => (
    <button
      key={btn.id}
      onClick={() => handleClick(btn.handler, btn.id)}
      className="m-1 flex rounded-full border bg-white p-2 text-center text-sm"
    >
      {btn.text}
    </button>
  ));

  const widgetRef = useRef(null); // widgetRef 선언 및 초기화

  useEffect(() => {
    // 위젯이 마운트될 때마다 최 하단으로 스크롤 이동
    if (widgetRef.current) {
      widgetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, []);

  return (
    <div className="w-full overflow-x-hidden whitespace-nowrap">
      <div ref={widgetRef} className="z-30 flex flex-row overflow-x-auto">
        {makeBtn}
      </div>
    </div>
  );
};

export default Choose_3_2;
