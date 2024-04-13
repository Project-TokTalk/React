import React, { useEffect, useRef } from "react";

const Initial = (props) => {
  const initial = [
    {
      text: "Confirmation of start-up companies",
      handler: props.actionProvider.choose_1,
      id: "Confirmation of start-up companies",
    },
    {
      text: "Issuance of Confirmation",
      handler: props.actionProvider.choose_2,
      id: "Issuance of Confirmation",
    },
    {
      text: "Verification system",
      handler: props.actionProvider.choose_3,
      id: "Verification system",
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
  };

  const makeBtn = initial.map((btn) => (
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
    <>
      <div className="w-full overflow-x-hidden whitespace-nowrap">
        <div ref={widgetRef} className="z-30 flex flex-row overflow-x-auto">
          {makeBtn}
        </div>
      </div>
      <button
        className={`fixed bottom-24 right-10 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500`}
        onClick={props.actionProvider.Initial}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </>
  );
};

export default Initial;
