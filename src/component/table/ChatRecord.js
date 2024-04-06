import React from "react";
import ChatbotHeader from "../layout/ChatbotHeader";

const ChatRecord = () => {
  const user_IdList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  const chat_IdList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  // 04/05
  // 각각 반복문으로 바꿔서 전체 코드 길이 줄임

  return (
    <>
      <ChatbotHeader />
      <div className="flex h-screen w-full bg-white text-gray-800 antialiased">
        <div className="flex h-4/5 flex-1 flex-col">
          <main className="flex min-h-0 flex-grow border-t">
            <section className="flex min-h-0 w-full max-w-sm flex-none flex-col overflow-auto bg-gray-100 p-4">
              <h1 className="mb-3 pl-3 font-semibold">사용자별 대화내역</h1>
              <ul>
                {user_IdList.map((id_chatuser) => (
                  <li key={id_chatuser} className="flex text-gray-700 ">
                    <article
                      tabindex="0"
                      className="mb-2 flex  cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                    >
                      <span className="flex-none pr-2 pt-1">
                        <img
                          className="h-8 w-8 rounded-md"
                          src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                        />
                      </span>

                      <div className="flex-1">
                        <header className="mb-1">
                          사용자 아이디 {id_chatuser}
                        </header>
                        <p className="text-gray-600">
                          사용자의 마지막 채팅 내용 혹은 주요 채팅? <br />
                          몰라 알아서 하슈 {id_chatuser}
                        </p>
                        <footer className="mt-2 text-sm text-gray-500">
                          마지막 채팅 시간으로 수정 {id_chatuser}
                        </footer>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-label="main content"
              className="flex min-h-0 flex-auto flex-col border-l"
            >
              <nav className="flex bg-gray-100 p-4">
                <section
                  aria-labelledby="open-tickets-tabs-label"
                  className="mr-4 focus:outline-none"
                >
                  <label
                    id="open-tickets-tabs-label"
                    className="mb-1 flex  justify-center text-sm font-semibold"
                  >
                    총 응답 횟수
                  </label>
                  <ul className="flex">
                    <li>
                      <div className="flex w-24 flex-col items-center rounded-md border bg-white p-2">
                        <p className="text-lg font-semibold">32</p>
                        <p className="text-sm uppercase text-gray-600">Count</p>
                      </div>
                    </li>
                  </ul>
                </section>

                <section
                  aria-labelledby="ticket-statistics-tabs-label"
                  className="pb-2"
                >
                  <label
                    id="ticket-statistics-tabs-label"
                    className="mb-1 block pl-2 text-sm font-semibold"
                  >
                    개별 응답 여부
                    <span className="font-normal text-gray-700"></span>
                  </label>
                  <ul className="flex">
                    <li>
                      <button className="flex w-24 flex-col items-center rounded-l-md border border-r-0 bg-white p-2 focus:bg-yellow-200 focus:outline-none">
                        <p className="text-lg font-semibold">30</p>
                        <p className="text-sm uppercase text-gray-600">Good</p>
                      </button>
                    </li>

                    <li>
                      <button className="flex w-24 flex-col items-center rounded-r-md border bg-white p-2 focus:bg-yellow-200 focus:outline-none">
                        <p className="text-lg font-semibold">2</p>
                        <p className="text-sm uppercase text-gray-600">Bad</p>
                      </button>
                    </li>
                  </ul>
                </section>
              </nav>

              <header className="flex items-center border-t bg-white px-4 py-1">
                <div className="flex h-8 items-center justify-center">
                  <h2 id="content-caption" className="font-semibold">
                    사용자별 채팅 내역
                  </h2>
                </div>
              </header>

              <table className="flex h-full min-h-0 w-full flex-col border-t">
                <thead className="flex w-full flex-col px-4">
                  <tr className="flex  border-b">
                    <th className="flex w-64 justify-center truncate px-1 py-3 text-left font-semibold">
                      채팅일시
                    </th>
                    <th className="flex w-40 max-w-xs justify-center truncate px-1 py-3 text-left font-semibold xl:max-w-lg">
                      닉네임/idx
                    </th>
                    <th className="flex flex-1 justify-center truncate px-1 py-3 text-left font-semibold">
                      대화/답변 내용
                    </th>
                    <th className="flex w-28 justify-center truncate px-1 py-3 pr-4 text-left font-semibold">
                      응답여부
                    </th>
                  </tr>
                </thead>
                <tbody className="flex min-h-0 w-full flex-1 flex-col px-4">
                  <div className="flex h-full w-full flex-col overflow-auto">
                    {/* 04/05
                    그냥 Y/N 보여줄라고 조건식 넣음 ^^ */}
                    {chat_IdList.map((id_chatlist) =>
                      id_chatlist % 2 == 1 ? (
                        <tr
                          role="row"
                          className="flex border-b hover:bg-blue-100"
                        >
                          <td className="flex w-64 items-center justify-center px-1 py-3">
                            2024년 04월 01일 오전 11:41
                            <br /> 채팅 일시
                          </td>
                          <td className="flex w-40 items-center justify-center px-1 py-3">
                            System
                          </td>
                          <td className="flex flex-1 items-center truncate px-1 py-3">
                            채팅 내용 {id_chatlist}
                          </td>

                          <td className="flex w-24 items-center justify-center truncate px-1 py-3">
                            Y
                          </td>
                        </tr>
                      ) : (
                        <tr
                          role="row"
                          className="flex border-b hover:bg-blue-100"
                        >
                          <td className="flex w-64 items-center justify-center px-1 py-3">
                            2024년 04월 01일 오전 11:41
                            <br /> 채팅 일시
                          </td>
                          <td className="flex w-40 items-center justify-center px-1 py-3">
                            System
                          </td>
                          <td className="flex flex-1 items-center truncate px-1 py-3">
                            채팅 내용 {id_chatlist}
                          </td>

                          <td className="flex w-24 items-center justify-center truncate px-1 py-3">
                            N
                          </td>
                        </tr>
                      ),
                    )}
                  </div>
                </tbody>
              </table>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default ChatRecord;
