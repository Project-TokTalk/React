import React, { Component } from "react";
import axios from "axios";

class MessageParser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
    };
  }

  parse = (message) => {
    if (message.includes("123")) {
      this.props.actions.createbtn();
    }

    const sessionPhone = window.sessionStorage.getItem("phone");

    const dataToSend = {
      chat: message,
      phone: sessionPhone,
    };

    axios
      .post("http://43,202.224.188:8089/send_data", dataToSend)
      .then((response) => {
        console.log(message);
        console.log("여기까진 도착");
        const answer = response.data.message;
        console.log("Answer:", answer);
        this.setState({ answer }); // 응답 받은 후에 answer 값을 설정
        this.props.actions.handleHello(answer);
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
            actions: this.props.actions,
            answer: this.state.answer, // answer 값을 props로 전달
          });
        })}
      </div>
    );
  }
}

export default MessageParser;
