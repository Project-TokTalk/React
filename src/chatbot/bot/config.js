import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "../DogPicture";

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
  customStyles: {
    botMessageBox: {
      // 시스템측 채팅 색상
      backgroundColor: "#376B7E",
    },
    chatButton: {
      // 채팅 보내기 버튼 색상
      backgroundColor: "#5ccc9d",
    },
  },
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
    // Replaces the default header
    header: () => <Header />,
    // Replaces the default bot avatar - 챗봇 아바타 변경, 우리 로고쓰면 될듯?
    // botAvatar: (props) => <MyAvatar {...props} />,

    // Replaces the default bot chat message container - 컨테이너 스타일 변경
    // botChatMessage: (props) => <MyCustomChatMessage {...props} />,

    // Replaces the default user icon - 사용자 아바타 변경
    // userAvatar: (props) => <MyCustomAvatar {...props} />,

    // Replaces the default user chat message - 사용자 채팅 컨테이너 스타일 변경
    //userChatMessage: (props) => <MyCustomUserChatMessage {...props} />,
  },
};
export default config;
