import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "../DogPicture";
import ChatMessage from "../component/ChatMessage";

const botName = "ExcitementBot";
const message = createChatBotMessage("Hello world!");

function Header() {
  return (
    <div className="flex w-full items-center justify-between bg-gradient-to-r from-purple-600 to-blue-500 p-5">
      <i className="ri-arrow-left-s-line" />{" "}
      {/* 이거 아이콘인듯? 화살표하고 닫기버튼 */}
      <i className="ri-close-line" />
    </div>
  );
}

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
    header: () => <Header />,
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
export default config;
