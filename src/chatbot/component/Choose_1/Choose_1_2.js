import React, { useEffect, useRef } from "react";

const Choose_1_2 = (props) => {
  const choose_1_2 = [
    {
      text: "이의신청방법",
      handler: props.actionProvider.choose_1_2_1,
      id: "창업기업 확인 통보에 대해 이의신청을 하고싶은데, 신청방법은 어떻게 되나요?",
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

  const makeBtn = choose_1_2.map((btn) => (
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

export default Choose_1_2;
