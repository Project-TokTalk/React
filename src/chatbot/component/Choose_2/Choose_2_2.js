import React, { useEffect, useRef } from "react";

const Choose_2_2 = (props) => {
  const choose_2_2 = [
    {
      text: "Date of issuance",
      handler: props.actionProvider.choose_2_2_1,
      id: " I filled out the application form, but it hasn't been issued yet.",
    },
    {
      text: "Request for supplementation",
      handler: props.actionProvider.choose_2_2_2,
      id: " The submitted application has been requested to be supplemented, but I would like to know more details.",
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

  const makeBtn = choose_2_2.map((btn) => (
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

export default Choose_2_2;
