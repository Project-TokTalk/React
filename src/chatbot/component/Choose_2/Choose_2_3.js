import React, { useEffect, useRef } from "react";

const Choose_2_3 = (props) => {
  const choose_2_3 = [
    {
      text: "Change of company name",
      handler: props.actionProvider.choose_2_3_1,
      id: "It is necessary to change the company name of the start-up company confirmation.",
    },
    {
      text: "Change of address",
      handler: props.actionProvider.choose_2_3_2,
      id: "I request to change the address of the issued confirmation.",
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

  const makeBtn = choose_2_3.map((btn) => (
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

export default Choose_2_3;
