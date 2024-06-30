import React, { useState, useEffect, useRef } from "react";

function Answer(props) {
  const [answer, setAnswer] = useState(""); // useState로 answer 상태 관리
  const widgetRef = useRef(null); // widgetRef 선언 및 초기화

  useEffect(() => {
    // 컴포넌트가 마운트될 때 초기화 작업 수행
    const sessionPhone = window.sessionStorage.getItem("phone");
    const message = props.payload.id;
    const dataToSend = { chat: message, phone: sessionPhone };

    fetch("http://43.202.224.188:8089/send_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        setAnswer(data.message); // 상태 업데이트
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  }, [props.payload.id]);

  useEffect(() => {
    // answer가 변경될 때마다 최 하단으로 스크롤 이동
    if (answer && widgetRef.current) {
      widgetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [answer]);

  // URL을 하이퍼링크로 변환하는 함수
  const convertToLink = (text) => {
    const linkRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(
      linkRegex,
      (url) =>
        `<br><a href="${url}" target="_blank" style="text-decoration: underline; color:blue; font-weight: bold;">${url}</a><br>`,
    );
  };

  return (
    <div
      className="flex flex-wrap items-center rounded-3xl border bg-color_d text-white"
      ref={widgetRef}
    >
      <div
        className="mx-4 my-2"
        dangerouslySetInnerHTML={{ __html: convertToLink(answer) }}
      />
    </div>
  );
}

export default Answer;
