import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import TokTalk from "../image/TokTalk.png";

const ChatHistory = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const widgetRef = useRef(null); // widgetRef 선언 및 초기화

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // 위젯이 마운트될 때마다 최 하단으로 스크롤 이동
    if (widgetRef.current) {
      widgetRef.current.scrollIntoView({
        block: "end",
        inline: "nearest",
      });
    }
  }, [chatHistory]); // chatHistory가 변경될 때마다 useEffect 실행

  const fetchData = async () => {
    const sessionPhone = window.sessionStorage.getItem("phone");

    try {
      const response1 = await axios.get(
        "http://43.201.239.119:8081/admin/kolog",
      );
      const response2 = await axios.get(
        "http://43.201.239.119:8081/admin/enlog",
      );

      // response1.data 또는 response2.data가 undefined인 경우를 처리
      const data1 =
        response1.data && response1.data[sessionPhone]
          ? response1.data[sessionPhone]
          : [];
      const data2 =
        response2.data && response2.data[sessionPhone]
          ? response2.data[sessionPhone]
          : [];

      // 서버에서 받아온 데이터로 채팅 이력 업데이트
      const combinedChatHistory = [...data1, ...data2];
      setChatHistory(combinedChatHistory);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleReturnChat = () => {
    window.location.href = "/chat";
  };

  return (
    <div className="flex h-screen flex-col">
      <div className="flex w-full items-center bg-top_color p-5">
        <div className="chat-history flex h-5 w-5 justify-start rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="none"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </div>
        <div className="ml-5 flex w-full items-center justify-center text-2xl text-white">
          <div className="mr-2" style={{ fontFamily: "JalnanGothic" }}>
            TokTalk
          </div>
          <img src={TokTalk} alt="TokTalk" className="h-6 w-6" />
        </div>
        <button
          onClick={handleReturnChat}
          className="close-button flex justify-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto bg-color_e">
        <ul className="flex flex-col">
          {chatHistory.map((message, index) => (
            <li key={index} className="flex w-full flex-col">
              <div className="flex w-auto flex-col items-end justify-end p-1 pl-5 text-base">
                <div className="mb-3 mr-5 rounded-2xl rounded-br-none bg-white px-3 py-2">
                  <div className="flex">{message.question}</div>
                  <div className="flex justify-start text-xs">
                    {new Date(message.time).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </div>
                </div>
              </div>

              <div className="flex-colitems-start flex w-auto justify-start p-1 pr-5 text-base">
                <div className="mb-3 ml-5 w-5/6 rounded-2xl rounded-bl-none bg-color_d px-3 py-2 text-white">
                  <div className="flex">{message.answer}</div>
                  <div className="flex justify-end text-xs">
                    {" "}
                    {new Date(message.time).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatHistory;
