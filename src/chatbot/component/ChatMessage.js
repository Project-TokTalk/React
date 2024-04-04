import styled from "styled-components";

// 시스템인지 봇인지 각각 판단해서 스타일 적용
const ChatMessageContainer = styled.div`
  max-width: 85%;
  width: fit-content;
  display: flex;
  justify-content: center;

  /* 채팅 메시지 배경색 */
  background-color: ${(props) => (props.isBot ? "#E6F4F1" : "#F9F871")};
  border-radius: ${(props) =>
    props.isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px"};
  margin-left: 0.4rem;

  /* 채팅 텍스트 색상 */
  color: ${(props) => (props.isBot ? "#3d4f6e" : "#3d4f6e")};

  /* 메시지 상하, 좌우 여백 */
  padding: ${(props) => (props.isBot ? "0.8rem 1.2rem" : "0.7rem 1.1rem")};
  font-weight: ${(props) => (props.isBot ? "500" : "400")};

  /* 글꼴 크기와 줄 높이 */
  font-size: 0.97rem;
  line-height: 1.3rem;

  /* 단어가 길어질 경우 자동 줄바꿈 */
  word-break: keep-all;
`;

function ChatMessage({ message, bot }) {
  return <ChatMessageContainer isBot={bot}>{message}</ChatMessageContainer>;
}

export default ChatMessage;
