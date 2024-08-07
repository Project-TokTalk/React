import { useEffect, useState } from "react";
import "../charts/Font.css";
import axios from "axios";
import UnsolvedHeader from "../layout/UnsolveHeader";

const Unsolved = () => {
  // 각 입력값들 초기값 설정
  const [CheckList, setCheckList] = useState([]);
  const [Unsolve, setUnsolve] = useState([]);
  const ChatK = Unsolve["chatListK"];
  const ChatE = Unsolve["chatListE"];

  // 30개의 답변을 저장할 수 있는 배열 생성
  const [Answers, setAnswers] = useState(Array.from({ length: 30 }, () => ""));

  // 랜더링시 처음 한번 데이터를 가져옴
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/admin/unsolve");
      setUnsolve(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // 미해결질문 리스트의 체크박스 상태 저장
  const onChangeEach = (e, id_unsolved) => {
    if (e.target.checked) {
      setCheckList((prevCheckList) => [...prevCheckList, id_unsolved]); // 이전 상태를 이용하여 업데이트
    } else {
      setCheckList((prevCheckList) =>
        prevCheckList.filter((checkedId) => checkedId !== id_unsolved),
      ); // 이전 상태를 이용하여 업데이트
    }
  };

  // 답안 입력 변경 핸들러
  const onAnswerChange = (e, id_unsolved) => {
    const { value } = e.target;
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[id_unsolved - 1] = value;
      return updatedAnswers;
    });
  };

  const handleRegister = () => {
    alert("답변이 등록되었습니다");
  };

  return (
    <>
      <div className="mx-auto flex h-screen w-full flex-col justify-start px-16">
        <UnsolvedHeader />
        <div className="flex h-3/4 flex-row">
          <div className="flex flex-grow flex-col" id="unsolved-scroll">
            <table
              className="flex h-full min-h-0 w-full flex-col object-center shadow-lg ring-1 ring-inset ring-gray-300"
              style={{ fontFamily: "Pretendard-Regular" }}
            >
              <thead className="flex w-full flex-col bg-gray-100">
                <tr className="flex">
                  <th className="flex w-16 cursor-default justify-center border p-2 text-xl font-bold leading-6 text-gray-900">
                    -
                  </th>
                  <th className="flex w-16 cursor-default justify-center border p-2 text-xl font-bold leading-6 text-gray-900">
                    No
                  </th>
                  <th
                    className="flex cursor-default justify-center border p-2 text-xl font-bold leading-6 text-gray-900"
                    style={{ width: "800px" }}
                  >
                    질문
                  </th>
                  <th className="flex flex-1 cursor-default justify-center   border p-2 pr-3 text-xl font-bold leading-6 text-gray-900">
                    추가할 답안
                  </th>
                </tr>
              </thead>
              <tbody className="flex min-h-0 w-full flex-1 flex-col bg-gray-50">
                <div className="flex h-full w-full flex-col overflow-auto">
                  {ChatK &&
                    ChatK.map((value, idx) => (
                      <tr key={idx} className="flex text-gray-700">
                        <td className="flex w-16 items-center justify-center border">
                          <input
                            type="checkbox"
                            id={`checkbox-${value.id}`}
                            onChange={(e) => onChangeEach(e, value.id)}
                            checked={CheckList.includes(value.id)}
                          />
                        </td>
                        <td className="flex w-16 cursor-default items-center justify-center border">
                          {idx}
                        </td>
                        <td
                          className="flex cursor-default items-center border p-2"
                          style={{ width: "800px" }}
                        >
                          {value.question}
                        </td>
                        <td className="flex flex-1 items-center border">
                          <input
                            className="h-full w-full cursor-default rounded-md border border-white bg-transparent pl-3 hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                            type="input"
                            id={`answer-${value.id}`}
                            onChange={(e) => onAnswerChange(e, value.id)}
                            placeholder="Type Answer"
                          />
                        </td>
                      </tr>
                    ))}
                  {ChatE &&
                    ChatE.map((value, idx) => (
                      <tr
                        key={idx + ChatK.length}
                        className="flex text-gray-700"
                      >
                        <td className="flex w-16 items-center justify-center border">
                          <input
                            type="checkbox"
                            id={`checkbox-${value.id}`}
                            onChange={(e) => onChangeEach(e, value.id)}
                            checked={CheckList.includes(value.id)}
                          />
                        </td>
                        <td className="flex w-16 cursor-default items-center justify-center border">
                          {idx + ChatK.length}
                        </td>
                        <td
                          className="flex cursor-default items-center border p-2"
                          style={{ width: "800px" }}
                        >
                          {value.question}
                        </td>
                        <td className="flex flex-1 items-center border">
                          <input
                            className="h-full w-full cursor-default rounded-md border border-white bg-transparent pl-3 hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                            type="input"
                            id={`answer-${value.id}`}
                            onChange={(e) => onAnswerChange(e, value.id)}
                            placeholder="Type Answer"
                          />
                        </td>
                      </tr>
                    ))}
                </div>
              </tbody>
            </table>
            <div className="flex flex-row justify-center">
              <div class="item flex h-full grow items-center justify-center"></div>
              <div class="flex h-full flex-none items-center justify-center text-center">
                <div class="flex items-center space-x-3 px-3 pb-2">
                  <div class="text-md block text-black">
                    <button
                      className="mx-1 mt-3 flex h-10 w-20 items-center justify-center rounded-md border border-indigo-300 bg-indigo-200 focus:active:bg-indigo-300"
                      style={{ fontFamily: "Pretendard-Regular" }}
                    >
                      추가하기
                    </button>
                  </div>
                  <div class="text-md block text-black">
                    <button
                      className="mx-1 mt-3 flex h-10 w-20 items-center justify-center rounded-md border border-indigo-300 bg-indigo-200 focus:active:bg-indigo-300"
                      style={{ fontFamily: "Pretendard-Regular" }}
                      onClick={handleRegister}
                    >
                      수정하기
                    </button>
                  </div>
                  <div class="text-md block text-black">
                    <button
                      className="ml-1 mt-3 flex h-10 w-20 items-center justify-center rounded-md border border-indigo-300 bg-indigo-200 focus:active:bg-indigo-300"
                      style={{ fontFamily: "Pretendard-Regular" }}
                      onClick={handleRegister}
                    >
                      삭제하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unsolved;
