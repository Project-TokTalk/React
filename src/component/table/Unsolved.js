import { useState, useEffect } from "react";

const Unsolved = () => {
  const [CheckList, setCheckList] = useState([]);
  const [Answers, setAnswers] = useState(Array.from({ length: 30 }, () => ""));

  // 각각의 아이템에 대한 ID 리스트
  const IdList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ]; // 예시로 임의의 ID 리스트 설정

  const onChangeEach = (e, id_unsolved) => {
    if (e.target.checked) {
      setCheckList((prevCheckList) => [...prevCheckList, id_unsolved]); // 이전 상태를 이용하여 업데이트
    } else {
      setCheckList((prevCheckList) =>
        prevCheckList.filter((checkedId) => checkedId !== id_unsolved),
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
      <div className="container mx-auto flex h-screen w-full flex-col justify-center p-3">
        <div className="flex h-5/6 w-full bg-white shadow" id="unsolved-scroll">
          <table className="flex h-full min-h-0 w-full flex-col object-center">
            <thead className="flex w-full flex-col bg-gray-100">
              <tr className="flex">
                <th className="flex w-16 justify-center whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  -
                </th>
                <th className="flex w-16 justify-center whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  No
                </th>
                <th className="flex flex-1 justify-center whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  미해결 질문
                </th>
                <th className="flex flex-1 justify-center whitespace-nowrap border p-2 pr-3 text-xl font-bold leading-6 text-gray-900">
                  추가할 답안
                </th>
              </tr>
            </thead>
            <tbody className="flex min-h-0 w-full flex-1 flex-col bg-gray-50">
              <div className="flex h-full w-full flex-col overflow-auto">
                {/* 여기서 데이터 삽입하면 됩니다. */}
                {IdList.map((id_unsolved) => (
                  <tr key={id_unsolved} className="flex text-gray-700 ">
                    <td className="flex w-16 items-center justify-center border">
                      <input
                        type="checkbox"
                        id={`checkbox-${id_unsolved}`}
                        onChange={(e) => onChangeEach(e, id_unsolved)}
                        checked={CheckList.includes(id_unsolved)}
                      />
                    </td>
                    <td className="flex w-16 items-center justify-center border">
                      {id_unsolved}
                    </td>
                    <td className="flex flex-1 items-center border p-2">
                      미해결 질문 {id_unsolved}
                    </td>
                    <td className="flex flex-1 items-center border">
                      <input
                        className="h-full bg-transparent"
                        type="input"
                        id={`answer-${id_unsolved}`}
                        onChange={(e) => onAnswerChange(e, id_unsolved)}
                        placeholder="Type Answer"
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
          <div class="item flex h-full grow items-center justify-center"></div>
          <div class="flex h-full flex-none items-center justify-center text-center">
            <div class="flex items-center space-x-3 px-3">
              <div class="flex flex-none justify-center"></div>
              <div class="md:text-md hidden text-sm text-black md:block dark:text-white">
                <div className="mt-3 flex h-10 w-20 items-center justify-center rounded-md border border-indigo-300 bg-indigo-100">
                  삭제하기
                </div>
              </div>
              <div class="md:text-md hidden text-sm text-black md:block dark:text-white">
                <div className="mt-3 flex h-10 w-20 items-center justify-center rounded-md border border-indigo-300 bg-indigo-100">
                  등록하기
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
