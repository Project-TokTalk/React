import { useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./style/chatbot.css";
import getConfig from "./bot/config.js";
import MessageParser from "./bot/MessageParser.js";
import ActionProvider from "./bot/ActionProvider.js";
import TokTalk from "../image/TokTalk.png";

const Chat = () => {
  const [show, toggleShow] = useState(
    // /chat으로 접속시에만 켜진상태로 나옴
    window.location.pathname.includes("/chat"),
  );

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // 챗봇이 열려있고 챗봇 헤더 영역이면서 close 버튼을 클릭한 경우에만 창을 닫습니다.
      // close버튼에 close-button 속성 삽입 함
      if (show && e.target.closest(".close-button")) {
        toggleShow(false);
      }
    };
    // 저도 이건 몰라요.. 지우면 버튼 안되긴 함
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [show]);

  const onClick = () => toggleShow(!show);

  // 입력이 없는 경우 보내기버튼 비활성화
  const validator = (input) => {
    if (input.length > 0) return true;
    return false;
  };

  return show ? (
    <div>
      <Chatbot
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        config={getConfig(onClick)}
        validator={validator}
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
