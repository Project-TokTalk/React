import { useState, useEffect } from "react";
import SenarioHeader from "../layout/SenarioHeader";

const SenarioControl = () => {
  const [CheckList, setCheckList] = useState([]);
  const [Answers, setAnswers] = useState(Array.from({ length: 30 }, () => ""));

  // 각각의 아이템에 대한 ID 리스트
  const IdList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ]; // 예시로 임의의 ID 리스트 설정

  const onChangeEach = (e, id_scen) => {
    if (e.target.checked) {
      setCheckList((prevCheckList) => [...prevCheckList, id_scen]); // 이전 상태를 이용하여 업데이트
    } else {
      setCheckList((prevCheckList) =>
        prevCheckList.filter((checkedId) => checkedId !== id_scen),
      ); // 이전 상태를 이용하여 업데이트
    }
  };

  // 체크된게 넘어오는지 확인용
  function Send(updatedCheckList) {
    console.log("CheckList:", {
      CheckList: updatedCheckList,
    });
  }

  // CheckList가 업데이트될 때마다 Send 함수 호출
  useEffect(() => {
    Send(CheckList);
  }, [CheckList]);

  // 답안 입력 변경 핸들러
  const onAnswerChange = (e, id_unsolved) => {
    const { value } = e.target;
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[id_unsolved - 1] = value;
      return updatedAnswers;
    });
  };

  return (
    <>
      <div className="container mx-auto flex h-screen w-full flex-col justify-start p-3">
        <SenarioHeader />
        <div className="flex h-2/3 w-full bg-white shadow" id="unsolved-scroll">
          <table className="flex h-full min-h-0 w-full flex-col object-center">
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
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-green-500 focus:border-green-500 focus:outline-none"
                        type="input"
                        id={`answer-${id_scen}`}
                        onChange={(e) => onAnswerChange(e, id_scen)}
                        value="**** 확인"
                        style={{ width: "90%", flex: 1 }}
                      />
                    </td>
                    <td className="flex w-32 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-green-500 focus:border-green-500 focus:outline-none"
                        type="input"
                        id={`answer-${id_scen}`}
                        onChange={(e) => onAnswerChange(e, id_scen)}
                        value=""
                        style={{ width: "90%", flex: 1 }}
                      />
                    </td>
                    <td className="flex w-32 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-green-500 focus:border-green-500 focus:outline-none"
                        type="input"
                        id={`answer-${id_scen}`}
                        onChange={(e) => onAnswerChange(e, id_scen)}
                        value=""
                        style={{ width: "90%", flex: 1 }}
                      />
                    </td>
                    <td className="flex w-96 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-green-500 focus:border-green-500 focus:outline-none"
                        type="input"
                        id={`answer-${id_scen}`}
                        onChange={(e) => onAnswerChange(e, id_scen)}
                        value=""
                        style={{ width: "90%", flex: 1 }}
                      />
                    </td>
                    <td className="flex w-96 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-green-500 focus:border-green-500 focus:outline-none"
                        type="input"
                        id={`answer-${id_scen}`}
                        onChange={(e) => onAnswerChange(e, id_scen)}
                        value=""
                        style={{ width: "90%", flex: 1 }}
                      />
                    </td>
                    <td className="flex flex-1 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-green-500 focus:border-green-500 focus:outline-none"
                        type="input"
                        id={`answer-${id_scen}`}
                        onChange={(e) => onAnswerChange(e, id_scen)}
                        value=""
                        style={{ width: "90%", flex: 1 }}
                      />
                    </td>
                  </tr>
                ))}
              </div>
            </tbody>
          </table>
        </div>
        <div className="flex flex-row justify-center pt-2">
          <div class="item flex h-full grow items-center justify-center">
            <button className="ml-40 mt-3 flex h-10 w-40 items-center justify-center rounded-md border border-indigo-300 bg-indigo-200 focus:active:bg-indigo-300">
              추가하기
            </button>
          </div>
          <div class="flex h-full flex-none items-center justify-center text-center">
            <div class="flex items-center space-x-3 px-3">
              <div class="flex flex-none justify-center"></div>

              <div class="md:text-md hidden text-sm text-black md:block dark:text-white">
                <button className="mt-3 flex h-10 w-20 items-center justify-center rounded-md border border-indigo-300 bg-indigo-200 focus:active:bg-indigo-300">
                  삭제하기
                </button>
              </div>
              <div class="md:text-md hidden text-sm text-black md:block dark:text-white">
                <button className="mt-3 flex h-10 w-20 items-center justify-center rounded-md border border-indigo-300 bg-indigo-200 focus:active:bg-indigo-300">
                  수정하기
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
