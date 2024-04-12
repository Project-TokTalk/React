import React, { useEffect, useRef } from "react";

const Choose_2_1 = (props) => {
  const choose_2_1 = [
    {
      text: "지점 확인서",
      handler: props.actionProvider.choose_2_1_1,
      id: "지점도 확인서 발급이 가능한가요?",
    },
    {
      text: "중소기업 확인서",
      handler: props.actionProvider.choose_2_1_2,
      id: "중기확인 수신대기에 대한 질문입니다.",
    },
    {
      text: "포괄양도양수",
      handler: props.actionProvider.choose_2_1_3,
      id: "포괄양도양수를 통해 법인전환을 했는데 창업기업에 해당하나요?",
    },
    {
      text: "비영리법인",
      handler: props.actionProvider.choose_2_1_4,
      id: "비영리법인도 확인서 발급이 가능한가요?",
    },
    {
      text: "이전 단계",
      handler: props.actionProvider.choose_2,
      id: "이전 단계",
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
    window.scrollTo(0, document.body.scrollHeight);
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
