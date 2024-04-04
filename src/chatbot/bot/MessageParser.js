import React, { useState } from "react";
import axios from 'axios';

const MessageParser = ({ children, actions }) => {
  const [answer, setAnswer] = useState(""); // answer를 state로 정의

  const parse = (message) => {
    const dataToSend = {
      chat: message
    };

    axios.post('http://127.0.0.1:8089/send_data', dataToSend)
      .then(response => {
        console.log(message);
        console.log("여기까진 도착");
        const answer = response.data.message;
        console.log('Answer:', answer);
        setAnswer(answer); // 응답 받은 후에 answer 값을 설정
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
    actions.handleHello(answer );
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: actions,
          answer: answer, // answer 값을 props로 전달
        });
      })}
    </div>
  );
};

export default MessageParser;