import React from "react";
import DogPicture from "../DogPicture";
import SelectBtn from "../SelectBtn";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // hello를 입력 시 아래 문자열이 출력
  const handleHello = (answer) => {
    const botMessage = createChatBotMessage(answer);
    console.log(answer + "why?");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDataFromSelectBtn = (id) => {
    // SelectBtn으로부터 전달받은 데이터를 Chat.js로 전달
    setState((prev) => ({
      ...prev,
      userInput: id, // 입력란에 반영할 값을 설정
    }));
  };

  const createbtn = () => {
    const botMessage = createChatBotMessage("테스트합시다.", {
      widget: "SelectBtn",
    });

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
            createbtn,
            onDataFromSelectBtn: handleDataFromSelectBtn,
            handleHello
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
