import React, { useEffect, useRef } from "react";

const Choose_3_1 = (props) => {
  const choose_3_1 = [
    {
      text: "Confirmation of business start date",
      handler: props.actionProvider.choose_3_1_1,
      id: "Where can I check the start date of the business?",
    },
    {
      text: "How to leave the membership",
      handler: props.actionProvider.choose_3_1_2,
      id: "I'm curious about how to leave the membership.",
    },
    {
      text: "a public institution",
      handler: props.actionProvider.choose_3_1_3,
      id: "I'm in charge of a public institution, is there a separate way to join?",
    },
    {
      text: "Previous step",
      handler: props.actionProvider.choose_3,
      id: "Previous step",
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
  };

  const makeBtn = choose_3_1.map((btn) => (
    <button
      key={btn.id}
      onClick={() => handleClick(btn.handler, btn.id)}
      className="m-1 flex justify-center rounded-3xl border bg-white p-2 text-center text-xs"
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

export default Choose_3_1;
