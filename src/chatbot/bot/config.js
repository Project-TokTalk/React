import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "../DogPicture";
import ChatMessage from "../component/ChatMessage";
import TokTalk from "../../image/TokTalk.png";

const botName = "ExcitementBot";
// const message = createChatBotMessage("Hello world!");

const getConfig = () => {
  const config = {
    // 초기 메시지
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
    botName: botName,
    customStyles: {},
    state: {
      // 나도 모르겟다. 현재 위젯의 상태를 정의한다는데
      myCustomProperty: "Bikershorts",
    },
    widgets: [
      {
        // 위젯 이름
        widgetName: "DogPicture",

        // Function that will be called internally to resolve the widget - 따로 위젯을 생성하는 함수
        widgetFunc: (props) => <DogPicture {...props} />,

        // Any props you want the widget to receive on render - 위젯에 추가적으로 전달되는 속성
        props: {},

        // Any piece of state defined in the state object that you want to pass down to this widget
        // 위젯에 전달되는 상태
        mapStateToProps: ["selectedFlightId", "selectedFlight"],
      },
    ],
    customComponents: {
      // 이거 아래요소들은 커스텀이고 아직 제작안한상태로 에러나서 주석처리함
      header: () => (
        // 헤더 색 적용 안되서 일단 검은색 씌웠어
        <div className="flex w-full items-center bg-black p-5">
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
      // botAvatar: (props) => <MyAvatar {...props} />,

      // 컨테이너 스타일 변경
      botChatMessage: (props) => <ChatMessage {...props} bot />,

      // 사용자 아바타 변경
      // userAvatar: (props) => <MyCustomAvatar {...props} />,

      // 사용자 채팅 컨테이너 스타일 변경
      userChatMessage: (props) => <ChatMessage {...props} />,
    },
  };

  return config;
};

export default getConfig;

// export default config
