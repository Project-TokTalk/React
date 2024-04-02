import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // 입력받을 특정문자열
    if (message.includes("hello")) {
      // 출력
      actions.handleHello();
    }

    if (message.includes("dog")) {
      actions.handleDog();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          // GPT님께서 파싱 함수를 자식 요소에 전달이랍니다
          parse: parse,

          // 액션 제공자를 자식 요소에 전달이랍니다. 나도 이해 못함.
          actions: actions, // actions를 전달
        });
      })}
    </div>
  );
};

export default MessageParser;
