import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // hello를 입력 시 아래 문자열이 출력
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // dog를 입력 시 아래 문자열 출력 및 사진 출력(되야되는데 사진이 안나와 계속 찾아보는데 해결이 안되)
  // 문자열만 출력되고 widget쪽은 안되는건지 console.log도 안나오고 사진 로드도 안되 (이미지 주소 쳐보면 정상적인거 확인됨)
  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogPicture",
      },
    );

    // 메시지 출력 후 위젯이 출력되고 그게 모두 마무리 된 후 사용자에게 보여지도록 하는 것 인듯
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
