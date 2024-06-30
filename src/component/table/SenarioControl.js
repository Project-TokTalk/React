import { useEffect, useState } from "react";
import "../charts/Font.css";
import SenarioHeader from "../layout/SenarioHeader";

const SenarioControl = () => {
  const [CheckList, setCheckList] = useState([]);
  const [setAnswers] = useState(Array.from({ length: 30 }, () => ""));

  // 리스트의 체크박스 상태 저장
  const onChangeEach = (e, id_scen) => {
    if (e.target.checked) {
      setCheckList((prevCheckList) => [...prevCheckList, id_scen]); // 이전 상태를 이용하여 업데이트
    } else {
      setCheckList((prevCheckList) =>
        prevCheckList.filter((checkedId) => checkedId !== id_scen),
      ); // 이전 상태를 이용하여 업데이트
    }
  };

  // CheckList가 업데이트될 때마다 Send 함수 호출
  useEffect(() => {
    Send(CheckList);
  }, [CheckList]);

  // 답안 입력 변경 핸들러
  const onAnswerChange = (e, id_unsolved) => {
    const { defaultValue } = e.target;
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[id_unsolved - 1] = defaultValue;
      return updatedAnswers;
    });
  };

  const handleRegister = () => {
    alert("시나리오가 수정되었습니다");
  };

  const handleDelete = () => {
    alert("시나리오가 삭제되었습니다");
  };

  return (
    <>
      <div className="mx-auto flex h-screen w-full flex-col justify-start p-3 px-16">
        <SenarioHeader />

        <div className="flex h-3/4 w-full" id="unsolved-scroll">
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
                  번호
                </th>
                <th className="flex w-32 cursor-default justify-center border p-2 pl-7 text-xl font-bold leading-6 text-gray-900 hover:bg-blue-100 hover:active:bg-blue-200">
                  대분류
                  <button className=" ml-1 flex items-center">
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                </th>
                <th className="flex w-32 cursor-default justify-center border p-2 text-xl font-bold leading-6 text-gray-900">
                  중분류
                </th>
                <th className="flex w-32 cursor-default justify-center border p-2 text-xl font-bold leading-6 text-gray-900">
                  소분류
                </th>
                <th className="flex w-96 cursor-default justify-center border p-2 text-xl font-bold leading-6 text-gray-900">
                  질문
                </th>
                <th className="flex w-96 cursor-default justify-center border p-2 text-xl font-bold leading-6 text-gray-900">
                  답변
                </th>
                <th className="flex flex-1 cursor-default justify-center border p-2 text-xl font-bold leading-6 text-gray-900">
                  ars 번호, url
                </th>
              </tr>
            </thead>
            <tbody className="flex min-h-0 w-full flex-1 flex-col bg-gray-50">
              <div className="flex h-full w-full flex-col overflow-auto">
                {IdList.map((id_scen) => (
                  <tr key={id_scen} className="flex text-gray-700">
                    <td className="flex w-16 items-center justify-center border p-2">
                      <input
                        type="checkbox"
                        id={`checkbox-${id_scen}`}
                        onChange={(e) => onChangeEach(e, id_scen)}
                        checked={CheckList.includes(id_scen)}
                      />
                    </td>
                    <td className="flex w-16 cursor-default justify-center border p-2">
                      {id_scen}
                    </td>
                    <td className="flex w-32 border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                        type="input"
                        id={`answer-${id_scen}`}
                        onChange={(e) => onAnswerChange(e, id_scen)}
                        style={{ width: "90%", flex: 1 }}
                      />
                    </td>
                    <td className="flex w-32 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                        type="input"
                        id={`answer-${id_scen}`}
                        onChange={(e) => onAnswerChange(e, id_scen)}
                        defaultValue=""
                        style={{ width: "90%", flex: 1 }}
                      />
                    </td>
                    <td className="flex w-32 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                        type="input"
                        id={`answer-${id_scen}`}
                        onChange={(e) => onAnswerChange(e, id_scen)}
                        defaultValue=""
                        style={{ width: "90%", flex: 1 }}
                      />
                    </td>
                    <td className="flex w-96 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                        type="input"
                        id={`answer-${id_scen}`}
                        onChange={(e) => onAnswerChange(e, id_scen)}
                        defaultValue=""
                        style={{ width: "90%", flex: 1 }}
                      />
                    </td>
                    <td className="flex w-96 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                        type="input"
                        id={`answer-${id_scen}`}
                        onChange={(e) => onAnswerChange(e, id_scen)}
                        defaultValue=""
                        style={{ width: "90%", flex: 1 }}
                      />
                    </td>
                    <td className="flex flex-1 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                        type="input"
                        id={`answer-${id_scen}`}
                        onChange={(e) => onAnswerChange(e, id_scen)}
                        defaultValue=""
                        style={{ width: "90%", flex: 1 }}
                      />
                    </td>
                  </tr>
                ))}
              </div>
            </tbody>
          </table>
        </div>
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
                  onClick={handleDelete}
                >
                  삭제하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SenarioControl;
