import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "../DogPicture";
import SelectBtn from "../SelectBtn";
import ChatMessage from "../component/ChatMessage";
import TokTalk from "../../image/TokTalk.png";

const botName = "ExcitementBot";
const message = createChatBotMessage("Hello world!");

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

  const config = {
    // 초기 메시지
    botName: botName,
    customStyles: {},

    initialMessages: [
      createChatBotMessage("Would you like to see a picture of a dog?"),
    ],

    state: {
      // 나도 모르겟다. 현재 위젯의 상태를 정의한다는데
      // myCustomProperty: "Bikershorts",
    },

    widgets: [
      {
        // 위젯 이름
        widgetName: "SelectBtn",

        // 따로 위젯을 생성하는 함수
        widgetFunc: (props) => <SelectBtn {...props} />,

        // 위젯에 추가적으로 전달되는 속성
        // props: {},

        // 위젯에 전달되는 상태
        // mapStateToProps: ["selectedFlightId", "selectedFlight"],
      },
    ],
    customComponents: {
      header: () => (
        // 헤더 색 적용 완료
        <div className="flex w-full items-center bg-top_color p-5">
          {/* 여기 버튼이 회원정보로 가는 버튼 */}
          <button className="flex h-5 w-5 justify-start rounded-full ring-1 ring-inset ring-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </button>
          <div className="flex w-full items-center justify-center text-2xl text-white">
            <div className="mr-2 font-semibold">TokTalk</div>
            <img src={TokTalk} alt="TokTalk" className="h-6 w-6" />
          </div>
          <button className="close-button flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </button>
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

// export default config
