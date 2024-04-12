import React, { Component } from "react";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "", // 응답 메시지 상태
    };
    this.chatWindowRef = React.createRef(); // chatWindow 요소에 대한 참조 생성
  }

  componentDidMount() {
    // 컴포넌트가 마운트될 때 초기화 작업 수행
    const sessionPhone = window.sessionStorage.getItem("phone");
    const message = this.props.payload.id;
    const dataToSend = { chat: message, phone: sessionPhone };

    fetch("http://127.0.0.1:8089/send_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Initial response:", data);
        this.setState({ answer: data.message }, () => {
          this.scrollToBottom(); // 응답을 받은 후 스크롤 아래로 이동
        });
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  }

  componentDidUpdate() {
    this.scrollToBottom(); // 컴포넌트 업데이트 시 스크롤 아래로 이동
  }

  scrollToBottom() {
    if (this.chatWindowRef.current) {
      this.chatWindowRef.current.scrollTop =
        this.chatWindowRef.current.scrollHeight;
    }
  }

  render() {
    return (
      <div
        className="chat-window flex flex-wrap items-center rounded-3xl border bg-color_d text-white"
        ref={this.chatWindowRef} // ref를 chatWindowRef로 설정
      >
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
