import React from "react";

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

  const Initial = (id) => {
    const botMessage = createChatBotMessage(
      "Hello. This is TokTalk. We provide consultation on start-up-related complaints . Please ask a question using keywords in the chat window.",
      {
        widget: "initial",
      },
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_1 = (id) => {
    const botMessage = createChatBotMessage(id, {
      widget: "Choose_1",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_1_1 = (id) => {
    const botMessage = createChatBotMessage("관련 법령", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_1_2 = (id) => {
    const botMessage = createChatBotMessage(id, {
      widget: "Choose_1_2",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_1_2_1 = (id) => {
    const botMessage = createChatBotMessage("이의신청방법", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_1_3 = (id) => {
    const botMessage = createChatBotMessage(id, {
      widget: "Choose_1_3",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_1_3_1 = (id) => {
    const botMessage = createChatBotMessage("발급기한", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_1_3_2 = (id) => {
    const botMessage = createChatBotMessage("사업자등록증", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2 = (id) => {
    const botMessage = createChatBotMessage(id, {
      widget: "Choose_2",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_1 = (id) => {
    const botMessage = createChatBotMessage("관련 법령", {
      widget: "Choose_2_1",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_1_1 = (id) => {
    const botMessage = createChatBotMessage("지점 확인서", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_1_2 = (id) => {
    const botMessage = createChatBotMessage("중소기업 확인서", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_1_3 = (id) => {
    const botMessage = createChatBotMessage("포괄양도양수", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_1_4 = (id) => {
    const botMessage = createChatBotMessage("비영리법인", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_2 = (id) => {
    const botMessage = createChatBotMessage(id, {
      widget: "Choose_2_2",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_2_1 = (id) => {
    const botMessage = createChatBotMessage("발급일", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_2_2 = (id) => {
    const botMessage = createChatBotMessage("보완요청", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_3 = (id) => {
    const botMessage = createChatBotMessage("관련 법령", {
      widget: "Choose_2_3",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_3_1 = (id) => {
    const botMessage = createChatBotMessage("기업명 변경", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_3_2 = (id) => {
    const botMessage = createChatBotMessage("주소변경", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_3_3 = (id) => {
    const botMessage = createChatBotMessage("제출 신청서 수정", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_4 = (id) => {
    const botMessage = createChatBotMessage(id, {
      widget: "Choose_2_4",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_4_1 = (id) => {
    const botMessage = createChatBotMessage("업종변경", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_4_2 = (id) => {
    const botMessage = createChatBotMessage("대표자 변경", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_5 = (id) => {
    const botMessage = createChatBotMessage(id, {
      widget: "Choose_2_5",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_5_1 = (id) => {
    const botMessage = createChatBotMessage("창업이력 작성", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_5_2 = (id) => {
    const botMessage = createChatBotMessage("창업이력 변경사항", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_5_3 = (id) => {
    const botMessage = createChatBotMessage("상호명 없음", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_5_4 = (id) => {
    const botMessage = createChatBotMessage("공동대표", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_5_5 = (id) => {
    const botMessage = createChatBotMessage("공공마이데이터", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_5_6 = (id) => {
    const botMessage = createChatBotMessage("수기제출", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_2_5_7 = (id) => {
    const botMessage = createChatBotMessage("업종코드 확인방법", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_3 = (id) => {
    const botMessage = createChatBotMessage(id, {
      widget: "Choose_3",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_3_1 = (id) => {
    const botMessage = createChatBotMessage(id, {
      widget: "Choose_3_1",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_3_1_1 = (id) => {
    const botMessage = createChatBotMessage("사업개시일 확인", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_3_1_2 = (id) => {
    const botMessage = createChatBotMessage("회원탈퇴", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_3_1_3 = (id) => {
    const botMessage = createChatBotMessage("공공기관", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_3_2 = (id) => {
    const botMessage = createChatBotMessage(id, {
      widget: "Choose_3_1",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_3_2_1 = (id) => {
    const botMessage = createChatBotMessage("증빙서류 제출", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_3_2_2 = (id) => {
    const botMessage = createChatBotMessage("업종관계 확인", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_3_3 = (id) => {
    const botMessage = createChatBotMessage(id, {
      widget: "Choose_3_1",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_3_3_1 = (id) => {
    const botMessage = createChatBotMessage("기업정보 입력 오류", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_3_4 = (id) => {
    const botMessage = createChatBotMessage(id, {
      widget: "Choose_3_1",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_3_4_1 = (id) => {
    const botMessage = createChatBotMessage("정보 수정", {
      widget: "answer",
      payload: { id: id },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const choose_3_4_2 = (id) => {
    const botMessage = createChatBotMessage("제품정보", {
      widget: "answer",
      payload: { id: id },
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
            handleHello,
            Initial,
            choose_1,
            choose_1_1,
            choose_1_2,
            choose_1_2_1,
            choose_1_3,
            choose_1_3_1,
            choose_1_3_2,
            choose_2,
            choose_2_1,
            choose_2_1_1,
            choose_2_1_2,
            choose_2_1_3,
            choose_2_1_4,
            choose_2_2,
            choose_2_2_1,
            choose_2_2_2,
            choose_2_3,
            choose_2_3_1,
            choose_2_3_2,
            choose_2_3_3,
            choose_2_4,
            choose_2_4_1,
            choose_2_4_2,
            choose_2_5,
            choose_2_5_1,
            choose_2_5_2,
            choose_2_5_3,
            choose_2_5_4,
            choose_2_5_5,
            choose_2_5_6,
            choose_2_5_7,
            choose_3,
            choose_3_1,
            choose_3_1_1,
            choose_3_1_2,
            choose_3_1_3,
            choose_3_2,
            choose_3_2_1,
            choose_3_2_2,
            choose_3_3,
            choose_3_3_1,
            choose_3_4,
            choose_3_4_1,
            choose_3_4_2,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
