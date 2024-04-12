import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ChatbotHeader from "../layout/ChatbotHeader";

const ChatRecord = () => {
  const [Kodata, setKodata] = useState([]);
  const [Endata, setEndata] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortedChats, setSortedChats] = useState([]);

  const elementRef = useRef(null);

  useEffect(() => {
    // 컴포넌트가 렌더링 될 때 스크롤을 맨 아래로 이동
    fetchData();
    if (elementRef.current) {
      elementRef.current.scrollTop = elementRef.current.scrollHeight;
    }
    // 화면 로딩 후 첫 번째 항목 클릭
    if (allKeys.length > 0) {
      handleUserClick(allKeys[0]);
    }
  }, []);

  const fetchData = async () => {
    try {
      const response1 = await axios.get(
        "http://43.201.239.119:8081/admin/kochat",
      );
      const response2 = await axios.get(
        "http://43.201.239.119:8081/admin/enchat",
      );
      setKodata(response1.data);
      setEndata(response2.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function countValuesInMap(map) {
    return Object.keys(map).reduce((totalCount, key) => {
      // 현재 키의 배열의 길이를 합산, count에 추가
      return totalCount + map[key].length;
    }, 0); // 초기값 0
  }
  function countAllMap() {
    const totalValues = countValuesInMap(Kodata) + countValuesInMap(Endata);
    return totalValues;
  }

  const WrongAnswerK =
    "죄송합니다. 이해하지 못했습니다. 키워드로 질문하거나 좀 더 정확하게 말씀해주세요. 예 : 제품 등록";
  const WrongAnswerE =
    "I'm sorry. I didn't understand. Please ask me a ke…e more accurately. Example : Product Registration";

  function countAnswersWithSpecificValue(map, specificValue) {
    let count = 0;

    // 맵의 각 키에 해당하는 값을 순회하면서 조건을 확인합니다.
    Object.values(map).forEach((items) => {
      // 각 값들의 answer 속성이 특정 문자열과 동일한지 확인하여 카운트를 증가시킵니다.
      items.forEach((item) => {
        if (item.answer === specificValue) {
          count++;
        }
      });
    });

    return count;
  }

  const CountWrongAnswer = () => {
    const Answer =
      countAnswersWithSpecificValue(Kodata, WrongAnswerK) +
      countAnswersWithSpecificValue(Endata, WrongAnswerE);
    return Answer;
  };

  const handleUserClick = (user) => {
    setSelectedUser(user); // 사용자를 선택한 상태로 변경

    let userChats = [];

    // Kodata[user]와 Endata[user]가 모두 존재하는 경우
    if (Kodata[user] && Endata[user]) {
      userChats = [...Kodata[user], ...Endata[user]]; // 두 배열을 합침
    }
    // Kodata[user]만 존재하는 경우
    else if (Kodata[user]) {
      userChats = [...Kodata[user]]; // Kodata[user]만 사용
    }
    // Endata[user]만 존재하는 경우
    else if (Endata[user]) {
      userChats = [...Endata[user]]; // Endata[user]만 사용
    }

    setSortedChats(userChats); // 선택된 사용자의 채팅 기록을 설정
  };

  const allKeys = [
    ...new Set([...Object.keys(Kodata), ...Object.keys(Endata)]),
  ];

  // 04/05
  // 각각 반복문으로 바꿔서 전체 코드 길이 줄임

  return (
    <>
      {/* {console.log(Kodata)}
      {console.log(Endata)} */}
      {console.log(sortedChats)}
      {console.log(allKeys)}
      <div
        className="flex h-screen w-full justify-center bg-white text-gray-800 antialiased"
        style={{ fontFamily: "Pretendard-Regular" }}
      >
        <div className="flex h-full w-full flex-col px-16 pb-16">
          <ChatbotHeader />
          <main className="flex min-h-0 flex-grow border-t">
            <section className="flex min-h-0 w-1/5 max-w-sm flex-none flex-col bg-gray-100 p-3 shadow-md">
              <h1 className=" flex flex-row items-center justify-between pb-3">
                <div className="pl-3 font-semibold">사용자별 대화내역</div>
                <div className="flex h-8 w-2/5 rounded-md border border-gray-300 bg-white">
                  <input
                    type="input"
                    className="flex w-full rounded-md border border-hidden border-gray-300 pl-2 focus:outline-none"
                  ></input>
                  {/* 검색란 추가 */}

                  <button className="pr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </div>
              </h1>
              <ul className="flex flex-col overflow-auto">
                {allKeys.map((key, index) => (
                  <li key={index} onClick={() => handleUserClick(key)}>
                    <article
                      tabIndex="0"
                      className="mb-2 flex cursor-pointer rounded-md border bg-white p-3 text-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none"
                    >
                      <span className="flex-none pr-2 pt-1">
                        <image
                          className="h-8 w-8 rounded-md"
                          src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/avatar.png"
                          alt="User Avatar"
                        />
                      </span>

                      <div className="flex-1">
                        <header className="mb-1">
                          {key} <span className="font-semibold">Chat</span> on
                        </header>
                        <p className="text-gray-600">
                          {/* Additional content here */}
                        </p>
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
                      <button className="flex w-24 cursor-default flex-col items-center rounded-md border bg-white p-2 focus:bg-yellow-200 focus:outline-none">
                        <p className="text-lg font-semibold">{countAllMap()}</p>
                        <p className="text-sm uppercase text-gray-600">Count</p>
                      </button>
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
                      <button className="flex w-24 cursor-default flex-col items-center rounded-l-md border border-r-0 bg-white p-2 focus:bg-yellow-200 focus:outline-none">
                        <p className="text-lg font-semibold">
                          {countAllMap() - CountWrongAnswer()}
                        </p>
                        <p className="text-sm uppercase text-gray-600">
                          success
                        </p>
                      </button>
                    </li>

                    <li>
                      <button className="flex w-24 cursor-default flex-col items-center rounded-r-md border bg-white p-2 focus:bg-yellow-200 focus:outline-none">
                        <p className="text-lg font-semibold">
                          {CountWrongAnswer()}
                        </p>
                        <p className="text-sm uppercase text-gray-600">fail</p>
                      </button>
                    </li>
                  </ul>
                </section>
              </nav>

              <header className="flex items-center border-t bg-white px-4 py-1">
                <div className="flex h-8 items-center justify-center">
                  <h2 id="content-caption" className="font-semibold">
                    {selectedUser === null && <p>채팅 기록을 확인해주세요.</p>}

                    {selectedUser !== null && (
                      <p>{selectedUser} 님의 채팅 내역</p>
                    )}
                  </h2>
                </div>
              </header>

              <table className="flex h-full min-h-0 w-full flex-col border-t shadow-md">
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
                    {sortedChats.map((value, index) => (
                      <tr
                        key={index}
                        role="row"
                        ref={elementRef}
                        className="flex cursor-pointer border-b hover:bg-blue-100"
                        style={{ height: "auto" }}
                      >
                        <td className="flex w-64 items-center justify-center whitespace-normal px-1 py-3">
                          {value.time[0]}-{value.time[1]}-{value.time[2]}
                        </td>
                        <td className="flex w-40 items-center justify-center whitespace-normal px-1 py-3">
                          {value.user}
                        </td>
                        <td className="flex-1 items-center truncate whitespace-normal px-1 py-3">
                          {value.question} / {value.answer}
                        </td>
                        <td className="flex w-24 items-center justify-center truncate whitespace-normal px-1 py-3">
                          {value.answer !== WrongAnswerK &&
                          value.answer !== WrongAnswerE
                            ? "Y"
                            : "N"}
                        </td>
                      </tr>
                    ))}
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
