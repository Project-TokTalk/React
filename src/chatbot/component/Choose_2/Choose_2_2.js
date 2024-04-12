import React, { useEffect, useRef } from "react";

const Choose_2_2 = (props) => {
  const choose_2_2 = [
    {
      text: "발급일",
      handler: props.actionProvider.choose_2_2_1,
      id: "신청서를 작성했는데 아직 발급이 안되고 있습니다.",
    },
    {
      text: "보완요청",
      handler: props.actionProvider.choose_2_2_2,
      id: "제출한 신청서가 보완요청되었는데 자세한 내용이 알고싶습니다.",
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
