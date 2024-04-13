import React, { useEffect, useRef } from "react";

const Choose_2 = (props) => {
  const choose_2_btn = [
    {
      id: "Issuance method",
      handler: props.actionProvider.choose_2_1,
    },
    {
      id: "Questions",
      handler: props.actionProvider.choose_2_2,
    },
    {
      id: "Modify Confirmation",
      handler: props.actionProvider.choose_2_3,
    },
    {
      id: "Return Confirmation",
      handler: props.actionProvider.choose_2_4,
    },
    {
      id: "Completion of the application form",
      handler: props.actionProvider.choose_2_5,
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
  };

  const makeBtn = choose_2_btn.map((btn) => (
    <button
      key={btn.id}
      onClick={() => handleClick(btn.handler, btn.id)}
      className="m-1 flex rounded-full border bg-white p-2 text-center text-sm"
    >
      {btn.id}
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

export default Choose_2;
