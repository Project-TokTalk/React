import React, { useEffect, useRef } from "react";

const Choose_3_4 = (props) => {
  const Choose_3_4 = [
    {
      text: "Modifying Information",
      handler: props.actionProvider.choose_3_4_1,
      id: "I'm curious about how to modify corporate information.",
    },
    {
      text: "Product Information",
      handler: props.actionProvider.choose_3_4_2,
      id: "How do I register the product?",
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

  const makeBtn = Choose_3_4.map((btn) => (
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

export default Choose_3_4;
