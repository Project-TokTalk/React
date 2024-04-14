import { createChatBotMessage } from "react-chatbot-kit";
import TokTalk from "../../image/TokTalk.png";
import ChatMessage from "../component/ChatMessage";

import Initial from "../component/Initial";
import Answer from "../component/Answer";
import Choose_1 from "../component/Choose_1/Choose_1";
import Choose_1_2 from "../component/Choose_1/Choose_1_2";
import Choose_1_3 from "../component/Choose_1/Choose_1_3";
import Choose_2 from "../component/Choose_2/Choose_2";
import Choose_2_1 from "../component/Choose_2/Choose_2_1";
import Choose_2_2 from "../component/Choose_2/Choose_2_2";
import Choose_2_3 from "../component/Choose_2/Choose_2_3";
import Choose_2_4 from "../component/Choose_2/Choose_2_4";
import Choose_2_5 from "../component/Choose_2/Choose_2_5";
import Choose_3 from "../component/Choose_3/Choose_3";
import Choose_3_1 from "../component/Choose_3/Choose_3_1";
import Choose_3_3 from "../component/Choose_3/Choose_3_3";
import Choose_3_4 from "../component/Choose_3/Choose_3_4";
import ChatHistory from "../ChatHistory";
import { useEffect, useState } from "react";

const botName = "ExcitementBot";

const getConfig = () => {
  // 이건 챗봇측 아바타
  const BotAvatar = () => {
    return (
      <div className="react-chatbot-kit-chat-bot-avatar">
        <div
          className="react-chatbot-kit-chat-bot-avatar-container"
          style={{ background: "none" }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-chat_a">
            <img src={TokTalk} alt="TokTalk" className="h-6 w-6" />
          </div>
        </div>
      </div>
    );
  };

  // 이건 사용자의 아바타
  const UserAvatar = () => {
    return <div className="react-chatbot-kit-chat-bot-avatar"></div>;
  };

  const close =
    window.location.pathname.includes("/admin") ||
    window.location.pathname.includes("/history");

  const handleViewHistory = () => {
    window.location.href = "/history";
  };

  const config = {
    // 초기 메시지
    botName: botName,
    customStyles: {},

    initialMessages: [
      createChatBotMessage(
        "Hello. This is TokTalk. We provide consultation on start-up-related complaints . Please ask a question using keywords in the chat window.",
        {
          widget: "initial",
        },
      ),
    ],
    customMessages: {
      SystemMessage({ state: { currentSystemMessage } }) {
        const [message, setMessage] = useState("");
        useEffect(() => setMessage(currentSystemMessage), []);
        return <div>--- System: {message} ---</div>;
      },
    },

    widgets: [
      {
        widgetName: "initial",
        widgetFunc: (props) => <Initial {...props} />,
      },
      {
        widgetName: "ChatHistory",
        widgetFunc: (props) => <ChatHistory {...props} />,
      },
      {
        widgetName: "answer",
        widgetFunc: (props) => <Answer {...props} />,
      },
      {
        widgetName: "Choose_1",
        widgetFunc: (props) => <Choose_1 {...props} />,
      },
      {
        widgetName: "Choose_1_2",
        widgetFunc: (props) => <Choose_1_2 {...props} />,
      },
      {
        widgetName: "Choose_1_3",
        widgetFunc: (props) => <Choose_1_3 {...props} />,
      },
      {
        widgetName: "Choose_2",
        widgetFunc: (props) => <Choose_2 {...props} />,
      },
      {
        widgetName: "Choose_2_1",
        widgetFunc: (props) => <Choose_2_1 {...props} />,
      },
      {
        widgetName: "Choose_2_2",
        widgetFunc: (props) => <Choose_2_2 {...props} />,
      },
      {
        widgetName: "Choose_2_3",
        widgetFunc: (props) => <Choose_2_3 {...props} />,
      },
      {
        widgetName: "Choose_2_4",
        widgetFunc: (props) => <Choose_2_4 {...props} />,
      },
      {
        widgetName: "Choose_2_5",
        widgetFunc: (props) => <Choose_2_5 {...props} />,
      },
      {
        widgetName: "Choose_3",
        widgetFunc: (props) => <Choose_3 {...props} />,
      },
      {
        widgetName: "Choose_3_1",
        widgetFunc: (props) => <Choose_3_1 {...props} />,
      },
      {
        widgetName: "Choose_3_3",
        widgetFunc: (props) => <Choose_3_3 {...props} />,
      },
      {
        widgetName: "Choose_3_4",
        widgetFunc: (props) => <Choose_3_4 {...props} />,
      },
    ],
    customComponents: {
      header: () => (
        // 헤더 색 적용 완료
        <div className="flex w-full items-center bg-top_color p-5">
          {/* 여기 버튼이 회원정보로 가는 버튼 */}
          {!close && (
            <button
              onClick={handleViewHistory}
              className="chat-history flex h-5 w-5 justify-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-article"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M7 8h10" />
                <path d="M7 12h10" />
                <path d="M7 16h10" />
              </svg>
            </button>
          )}
          <div className="flex w-full items-center justify-center text-2xl text-white">
            <div
              className={`${close ? "ml-10" : ""} mr-2`}
              style={{ fontFamily: "JalnanGothic" }}
            >
              TokTalk
            </div>
            <img src={TokTalk} alt="TokTalk" className="h-6 w-6" />
          </div>
          {close && (
            <button className="close-button flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
            </button>
          )}
        </div>
      ),

      // 챗봇 아바타 변경, 우리 로고쓰면 될듯?
      botAvatar: (props) => <BotAvatar {...props} />,

      // 챗봇 컨테이너 스타일 변경
      botChatMessage: (props) => <ChatMessage {...props} bot />,

      // 사용자 아바타 변경
      userAvatar: (props) => <UserAvatar {...props} />,

      // 사용자 채팅 컨테이너 스타일 변경
      userChatMessage: (props) => <ChatMessage {...props} />,
    },
  };

  return config;
};

export default getConfig;
