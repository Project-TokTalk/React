import React, { useEffect, useRef } from "react";

const Choose_2_1 = (props) => {
  const choose_2_1 = [
    {
      text: "Small and Medium Business Confirmation Letter",
      handler: props.actionProvider.choose_2_1_2,
      id: `What is the SME confirmation waiting status?`,
    },
    {
      text: "a non-profit corporation",
      handler: props.actionProvider.choose_2_1_4,
      id: "Is it possible for non-profit corporations to issue confirmations?",
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

  const makeBtn = choose_2_1.map((btn) => (
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

export default Choose_2_1;
