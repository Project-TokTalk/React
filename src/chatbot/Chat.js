import React, { useState, useEffect, useRef } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./style/chatbot.css";
import getConfig from "./bot/config.js";
import MessageParser from "./bot/MessageParser.js";
import ActionProvider from "./bot/ActionProvider.js";
import TokTalk from "../image/TokTalk.png";

const Chat = () => {
  const [history, toggleHistory] = useState(false);
  const [show, toggleShow] = useState(
    // /chat에서 가져온 값을 초기값으로 설정
    window.location.pathname.includes("/chat"),
  );

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // 챗봇이 열려있고 챗봇 헤더 영역이면서 close 버튼을 클릭한 경우에만 창을 닫기
      // close버튼에 close-button 속성 삽입
      if (show && e.target.closest(".close-button")) {
        toggleShow(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [show]);

  const onClick = () => toggleShow(!show);

  // 입력이 없을때 전송버튼 비활성화
  const validator = (input) => {
    if (input.length > 0) return true;
    return false;
  };

  // show가 true인 경우 Chatbot 컴포넌트를 렌더링
  // false인 경우 플로팅버튼을 랜더링
  return show ? (
    <div>
      <Chatbot
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        config={getConfig(onClick)}
        validator={validator}
        disableScrollToBottom={true}
      />
    </div>
  ) : (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 flex transform rounded-full border-4 border-white bg-[#1E293B] p-3 text-white transition duration-500 ease-in-out"
    >
      <img src={TokTalk} alt="TokTalk" className="h-6 w-6" />
    </button>
  );
};

export default Chat;
