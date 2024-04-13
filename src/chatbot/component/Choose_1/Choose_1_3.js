import React, { useEffect, useRef } from "react";

const Choose_1_3 = (props) => {
  const choose_1_3 = [
    {
      text: "Due date of issuance",
      handler: props.actionProvider.choose_1_3_1,
      id: "Should all submissions be within three months?",
    },
    {
      text: "Business license",
      handler: props.actionProvider.choose_1_3_2,
      id: "Is the business license different from the business registration certificate?",
    },
    {
      text: "Previous step",
      handler: props.actionProvider.choose_1,
      id: "Previous step",
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
  };

  const makeBtn = choose_1_3.map((btn) => (
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
export default Choose_1_3;
