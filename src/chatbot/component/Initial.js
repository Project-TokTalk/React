import React, { useRef } from "react";

const Initial = (props) => {
  const initial = [
    {
      text: "창업기업 확인",
      handler: props.actionProvider.choose_1,
      id: "창업기업 확인",
    },
    {
      text: "확인서 발급",
      handler: props.actionProvider.choose_2,
      id: "확인서 발급",
    },
    {
      text: "확인시스템",
      handler: props.actionProvider.choose_3,
      id: "확인시스템",
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

  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center">{makeBtn}</div>
      <button
        className="fixed bottom-20 right-6 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500"
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
