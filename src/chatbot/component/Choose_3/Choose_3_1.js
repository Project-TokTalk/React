import React, { useEffect, useRef } from "react";

const Choose_3_1 = (props) => {
  const choose_3_1 = [
    {
      text: "사업개시일 확인",
      handler: props.actionProvider.choose_3_1_1,
      id: "사업개시일은 어디서 확인할 수 있나요?",
    },
    {
      text: "회원탈퇴",
      handler: props.actionProvider.choose_3_1_2,
      id: "회원탈퇴 방법이 궁금합니다.",
    },
    {
      text: "공공기관",
      handler: props.actionProvider.choose_3_1_3,
      id: "공공기관 담당자인데 별도의 가입방법이 있나요?",
    },
    {
      text: "이전 단계",
      handler: props.actionProvider.choose_3,
      id: "이전 단계",
    },
  ];

  const handleClick = (handler, id) => {
    handler(id);
  };

  const makeBtn = choose_3_1.map((btn) => (
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

export default Choose_3_1;
