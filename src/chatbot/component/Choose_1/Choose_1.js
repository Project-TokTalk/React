import React, { useEffect, useRef } from "react";

const Choose_1 = (props) => {
  const choose_1 = [
    {
      id: "an objection",
      handler: props.actionProvider.choose_1_2,
    },
    {
      id: "Issuance of evidentiary documents",
      handler: props.actionProvider.choose_1_3,
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
  };

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

  const makeBtn = choose_1.map((btn) => (
    <button
      key={btn.id}
      onClick={() => handleClick(btn.handler, btn.id)}
      className="m-1 flex rounded-full border bg-white p-2 text-center text-sm"
    >
      {btn.id}
    </button>
  ));

  return (
    <div className="w-full overflow-x-hidden whitespace-nowrap">
      <div ref={widgetRef} className="z-30 flex flex-row overflow-x-auto">
        {makeBtn}
      </div>
    </div>
  );
};

export default Choose_1;
