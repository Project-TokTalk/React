import React, { Component } from "react";
import axios from "axios";

class MessageParser extends Component {
  constructor(actionProvider, state) {
    super();
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse = (message) => {
    const sessionPhone = window.sessionStorage.getItem("phone");

    const dataToSend = {
      chat: message,
      phone: sessionPhone,
    };

    axios
      .post("http://43.202.224.188:8089/send_data", dataToSend)
      .then((response) => {
        console.log(message);
        console.log("여기까진 도착");
        const answer = response.data.message;
        console.log("Answer:", answer);
        this.actionProvider.handleHello(answer);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {
            parse: this.parse,
            actions: {
              handleHello: this.props.actions.handleHello,
            },
            answer: this.state.answer, // answer 값을 props로 전달
          });
        })}
      </div>
    );
  }
}

export default MessageParser;
