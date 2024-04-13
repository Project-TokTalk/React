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

  chathistory = () => {
    const { chatHistory } = this.props.widgets;
    const messages = chatHistory.map((message) => {
      if (message.className === "usermessage") {
        return this.createClientMessage(message.text);
      } else if (message.className === "chatmessage") {
        return this.createChatBotMessage(message.text);
      }
      return null;
    });

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, ...messages],
    }));
  };

  handleHello(answer) {
    const botMessage = this.createChatBotMessage(answer);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  }

  Initial = () => {
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
    const botMessage = this.createChatBotMessage("Please select below.", {
      widget: "Choose_1",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  // -------------------------------------------------------

  choose_1_2 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage("Please select below.", {
      widget: "Choose_1_2",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_1_2_1 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const botMessage = this.createChatBotMessage("Please select below.", {
      widget: "Choose_1_3",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_1_3_1 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const botMessage = this.createChatBotMessage("Please select below.", {
      widget: "Choose_2",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_1 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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

  choose_2_1_2 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const botMessage = this.createChatBotMessage("Please select below.", {
      widget: "Choose_2_2",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_2_1 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const botMessage = this.createChatBotMessage("Please select below.", {
      widget: "Choose_2_4",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_4_1 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const botMessage = this.createChatBotMessage("Please select below.", {
      widget: "Choose_2_5",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_2_5_2 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const botMessage = this.createChatBotMessage("Please select below.", {
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
    const botMessage = this.createChatBotMessage("Please select below.", {
      widget: "Choose_3_1",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_1_1 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const botMessage = this.createChatBotMessage("Please select below.", {
      widget: "Choose_3_1",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_3_1 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const botMessage = this.createChatBotMessage("Please select below.", {
      widget: "Choose_3_1",
    });
    this.updateChatbotState(userMessage);
    this.updateChatbotState(botMessage);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  };

  choose_3_4_1 = (id) => {
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
    const userMessage = this.createClientMessage(id);
    const botMessage = this.createChatBotMessage(
      "I'll let you know about " + id,
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
              chathistory: this.chathistory,
              Initial: this.Initial,
              choose_1: this.choose_1,
              choose_1_2: this.choose_1_2,
              choose_1_2_1: this.choose_1_2_1,
              choose_1_3: this.choose_1_3,
              choose_1_3_1: this.choose_1_3_1,
              choose_1_3_2: this.choose_1_3_2,
              choose_2: this.choose_2,
              choose_2_1: this.choose_2_1,
              choose_2_1_2: this.choose_2_1_2,
              choose_2_1_4: this.choose_2_1_4,
              choose_2_2: this.choose_2_2,
              choose_2_2_1: this.choose_2_2_1,
              choose_2_2_2: this.choose_2_2_2,
              choose_2_3: this.choose_2_3,
              choose_2_3_1: this.choose_2_3_1,
              choose_2_3_2: this.choose_2_3_2,
              choose_2_4: this.choose_2_4,
              choose_2_4_1: this.choose_2_4_1,
              choose_2_4_2: this.choose_2_4_2,
              choose_2_5: this.choose_2_5,
              choose_2_5_2: this.choose_2_5_2,
              choose_2_5_3: this.choose_2_5_3,
              choose_2_5_4: this.choose_2_5_4,
              choose_2_5_6: this.choose_2_5_6,
              choose_2_5_7: this.choose_2_5_7,
              choose_3: this.choose_3,
              choose_3_1: this.choose_3_1,
              choose_3_1_1: this.choose_3_1_1,
              choose_3_1_2: this.choose_3_1_2,
              choose_3_1_3: this.choose_3_1_3,
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
