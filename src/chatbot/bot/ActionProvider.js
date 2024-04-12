import React from "react";

class ActionProvider {
  constructor(createChatBotMessage, setState, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setState;
    this.createClientMessage = createClientMessage;
  }

  scrollToBottom() {
    const chatMessageContainer = document.querySelector(
      ".react-chatbot-kit-chat-message-container",
    );
    if (chatMessageContainer) {
      chatMessageContainer.scrollTo({
        top: chatMessageContainer.scrollHeight,
        behavior: "smooth", // 부드럽게 스크롤 내리기
      });
    }
  }

  handleHello(answer) {
    const botMessage = this.createChatBotMessage(answer);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  }

  Initial = (id) => {
    const botMessage = this.createChatBotMessage(
      "Hello. This is TokTalk. We provide consultation on start-up-related complaints. Please ask a question using keywords in the chat window.",
      {
        widget: "initial",
      },
    );
    this.updateChatbotState(botMessage);
  };

  choose_1 = (id) => {
    // 이건 사용자측에서 채팅이 나오도록 하는 속성, 원하는 텍스트로 바꾸고 싶을 시 id 대신에 작성
    // id는 각 파일(Choose_*_*) 에 각각 지정되어 있음
    const userMessage = this.createClientMessage(id);
    // 챗봇측에서 나오는 메시지, 이거 메시지 안나오고 위젯의 메시지만 띄우고 싶은데 그건 안된다.
    const botMessage = this.createChatBotMessage("아래에서 선택해주세요", {
      widget: "Choose_1",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  // -------------------------------------------------------

  choose_1_1 = (id) => {
    const userMessage = this.createClientMessage("관련 법령");
    const botMessage = this.createChatBotMessage(
      "관련 법령을 확인하겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_1_2 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage("아래에서 선택해주세요", {
      widget: "Choose_1_2",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_1_2_1 = (id) => {
    const userMessage = this.createClientMessage("이의신청방법");
    const botMessage = this.createChatBotMessage(
      "이의신청방법에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_1_3 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage("아래에서 선택해주세요", {
      widget: "Choose_1_3",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_1_3_1 = (id) => {
    const userMessage = this.createClientMessage("발급기한");
    const botMessage = this.createChatBotMessage(
      "발급기한에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_1_3_2 = (id) => {
    const userMessage = this.createClientMessage("사업자등록증");
    const botMessage = this.createChatBotMessage(
      "사업자등록증에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage("아래에서 선택해주세요", {
      widget: "Choose_2",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_1 = (id) => {
    const userMessage = this.createClientMessage("관련 법령");
    const botMessage = this.createChatBotMessage(
      "관련 법령에 대해 안내해드리겠습니다.",
      {
        widget: "Choose_2_1",
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_1_1 = (id) => {
    const userMessage = this.createClientMessage("지점 확인서");
    const botMessage = this.createChatBotMessage(
      "지점 확인서에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_1_2 = (id) => {
    const userMessage = this.createClientMessage("중소기업 확인서");
    const botMessage = this.createChatBotMessage(
      "중소기업 확인서에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_1_3 = (id) => {
    const userMessage = this.createClientMessage("포괄양도양수");
    const botMessage = this.createChatBotMessage(
      "포괄양도양수에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_1_4 = (id) => {
    const userMessage = this.createClientMessage("비영리법인");
    const botMessage = this.createChatBotMessage(
      "비영리법인에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_2 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage("아래에서 선택해주세요", {
      widget: "Choose_2_2",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_2_1 = (id) => {
    const userMessage = this.createClientMessage("발급일");
    const botMessage = this.createChatBotMessage(
      "발급일에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_2_2 = (id) => {
    const userMessage = this.createClientMessage("보완요청");
    const botMessage = this.createChatBotMessage(
      "보완요청에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_3 = (id) => {
    const userMessage = this.createClientMessage("관련 법령");
    const botMessage = this.createChatBotMessage(
      "관련 법령에 대해 안내해드리겠습니다.",
      {
        widget: "Choose_2_3",
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_3_1 = (id) => {
    const userMessage = this.createClientMessage("기업명 변경");
    const botMessage = this.createChatBotMessage(
      "기업명 변경에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_3_2 = (id) => {
    const userMessage = this.createClientMessage("주소변경");
    const botMessage = this.createChatBotMessage(
      "주소변경에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_3_3 = (id) => {
    const userMessage = this.createClientMessage("제출 신청서 수정");
    const botMessage = this.createChatBotMessage(
      "제출 신청서 수정에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_4 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage("아래에서 선택해주세요", {
      widget: "Choose_2_4",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_4_1 = (id) => {
    const userMessage = this.createClientMessage("업종변경");
    const botMessage = this.createChatBotMessage(
      "업종변경에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_4_2 = (id) => {
    const userMessage = this.createClientMessage("대표자 변경");
    const botMessage = this.createChatBotMessage(
      "대표자 변경에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_5 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage("아래에서 선택해주세요", {
      widget: "Choose_2_5",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_5_1 = (id) => {
    const userMessage = this.createClientMessage("창업이력 작성");
    const botMessage = this.createChatBotMessage(
      "창업이력 작성에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_5_2 = (id) => {
    const userMessage = this.createClientMessage("창업이력 변경사항");
    const botMessage = this.createChatBotMessage(
      "창업이력 변경사항에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_5_3 = (id) => {
    const userMessage = this.createClientMessage("상호명 없음");
    const botMessage = this.createChatBotMessage(
      "상호명 없음에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_5_4 = (id) => {
    const userMessage = this.createClientMessage("공동대표");
    const botMessage = this.createChatBotMessage(
      "공동대표에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_5_5 = (id) => {
    const userMessage = this.createClientMessage("공공마이데이터");
    const botMessage = this.createChatBotMessage(
      "공공마이데이터에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_5_6 = (id) => {
    const userMessage = this.createClientMessage("수기제출");
    const botMessage = this.createChatBotMessage(
      "수기제출에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_5_7 = (id) => {
    const userMessage = this.createClientMessage("업종코드 확인방법");
    const botMessage = this.createChatBotMessage(
      "업종코드 확인방법에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage("아래에서 선택해주세요", {
      widget: "Choose_3",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_1 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage("아래에서 선택해주세요", {
      widget: "Choose_3_1",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_1_1 = (id) => {
    const userMessage = this.createClientMessage("사업개시일 확인");
    const botMessage = this.createChatBotMessage(
      "사업개시일 확인에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_1_2 = (id) => {
    const userMessage = this.createClientMessage("회원탈퇴");
    const botMessage = this.createChatBotMessage(
      "회원탈퇴에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_1_3 = (id) => {
    const userMessage = this.createClientMessage("공공기관");
    const botMessage = this.createChatBotMessage(
      "공공기관에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_2 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage("아래에서 선택해주세요", {
      widget: "Choose_3_1",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_2_1 = (id) => {
    const userMessage = this.createClientMessage("증빙서류 제출");
    const botMessage = this.createChatBotMessage(
      "증빙서류 제출에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_2_2 = (id) => {
    const userMessage = this.createClientMessage("업종관계 확인");
    const botMessage = this.createChatBotMessage(
      "업종관계 확인에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_3 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage("아래에서 선택해주세요", {
      widget: "Choose_3_1",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_3_1 = (id) => {
    const userMessage = this.createClientMessage("기업정보 입력 오류");
    const botMessage = this.createChatBotMessage(
      "기업정보 입력 오류에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_4 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage("아래에서 선택해주세요", {
      widget: "Choose_3_1",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_4_1 = (id) => {
    const userMessage = this.createClientMessage("정보 수정");
    const botMessage = this.createChatBotMessage(
      "정보 수정에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_4_2 = (id) => {
    const userMessage = this.createClientMessage("제품정보");
    const botMessage = this.createChatBotMessage(
      "제품정보에 대해 안내해드리겠습니다.",
      {
        widget: "answer",
        payload: { id: id },
      },
    );
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {
            actions: {
              handleHello: this.handleHello,
              Initial: this.Initial,
              choose_1: this.choose_1,
              choose_1_1: this.choose_1_1,
              choose_1_2: this.choose_1_2,
              choose_1_2_1: this.choose_1_2_1,
              choose_1_3: this.choose_1_3,
              choose_1_3_1: this.choose_1_3_1,
              choose_1_3_2: this.choose_1_3_2,
              choose_2: this.choose_2,
              choose_2_1: this.choose_2_1,
              choose_2_1_1: this.choose_2_1_1,
              choose_2_1_2: this.choose_2_1_2,
              choose_2_1_3: this.choose_2_1_3,
              choose_2_1_4: this.choose_2_1_4,
              choose_2_2: this.choose_2_2,
              choose_2_2_1: this.choose_2_2_1,
              choose_2_2_2: this.choose_2_2_2,
              choose_2_3: this.choose_2_3,
              choose_2_3_1: this.choose_2_3_1,
              choose_2_3_2: this.choose_2_3_2,
              choose_2_3_3: this.choose_2_3_3,
              choose_2_4: this.choose_2_4,
              choose_2_4_1: this.choose_2_4_1,
              choose_2_4_2: this.choose_2_4_2,
              choose_2_5: this.choose_2_5,
              choose_2_5_1: this.choose_2_5_1,
              choose_2_5_2: this.choose_2_5_2,
              choose_2_5_3: this.choose_2_5_3,
              choose_2_5_4: this.choose_2_5_4,
              choose_2_5_5: this.choose_2_5_5,
              choose_2_5_6: this.choose_2_5_6,
              choose_2_5_7: this.choose_2_5_7,
              choose_3: this.choose_3,
              choose_3_1: this.choose_3_1,
              choose_3_1_1: this.choose_3_1_1,
              choose_3_1_2: this.choose_3_1_2,
              choose_3_1_3: this.choose_3_1_3,
              choose_3_2: this.choose_3_2,
              choose_3_2_1: this.choose_3_2_1,
              choose_3_2_2: this.choose_3_2_2,
              choose_3_3: this.choose_3_3,
              choose_3_3_1: this.choose_3_3_1,
              choose_3_4: this.choose_3_4,
              choose_3_4_1: this.choose_3_4_1,
              choose_3_4_2: this.choose_3_4_2,
            },
          });
        })}
      </div>
    );
  }
}
export default ActionProvider;
