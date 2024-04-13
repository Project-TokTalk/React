import React, { useEffect, useRef } from "react";

const Choose_2_5 = (props) => {
  const choose_2_5 = [
    {
      text: "Changes in start-up history",
      handler: props.actionProvider.choose_2_5_2,
      id: "There is a history of withdrawing from a joint business among the start-up history.",
    },
    {
      text: "If there is no trade name",
      handler: props.actionProvider.choose_2_5_3,
      id: "How do I fill out a business that does not have a business name in my start-up history?",
    },
    {
      text: "In the case of a co-representative",
      handler: props.actionProvider.choose_2_5_4,
      id: "There are two representatives, so do I only need to input one?",
    },
    {
      text: "Handwritten submission method",
      handler: props.actionProvider.choose_2_5_6,
      id: "I would like to inquire about the method of hand-submission.",
    },
    {
      text: "How to check the industry code",
      handler: props.actionProvider.choose_2_5_7,
      id: "How do I check the industry code?",
    },
    {
      text: "Previous step",
      handler: props.actionProvider.choose_2,
      id: "Previous step",
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
  };

  const makeBtn = choose_2_5.map((btn) => (
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

export default Choose_2_5;
