import React, { Component } from "react";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "", // 응답 메시지 상태
    };
  }

  componentDidMount() {
    // 컴포넌트가 마운트될 때 초기화 작업 수행
    const sessionPhone = window.sessionStorage.getItem("phone");
    const message = this.props.payload.id;
    const dataToSend = { chat: message, phone: sessionPhone };

    console.log(this.props.payload.id);
    console.log(message);
    console.log("test1");

    fetch("http://43.202.224.188:8089/send_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Initial response:", data);
        this.setState({ answer: data.message });
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  }

  render() {
    return (
      <div className="flex flex-wrap items-center rounded-3xl border bg-color_d text-white">
        <div className="mx-4 my-2">
          {this.state.answer}
          {this.props.widget && (
            <input type="hidden" name="widget" value={this.props.widget} />
          )}
        </div>
      </div>
    ); // answer 상태를 출력하도록 수정
  }
}

export default Answer;
