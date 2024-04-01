import { useState, useEffect } from "react";

const SenarioControl = () => {
  const [CheckList, setCheckList] = useState([]);

  // 각각의 아이템에 대한 ID 리스트
  const IdList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ]; // 예시로 임의의 ID 리스트 설정

  const onChangeEach = (e, id) => {
    if (e.target.checked) {
      setCheckList((prevCheckList) => [...prevCheckList, id]); // 이전 상태를 이용하여 업데이트
    } else {
      setCheckList((prevCheckList) =>
        prevCheckList.filter((checkedId) => checkedId !== id),
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

  return (
    <>
      <div className="container mx-auto flex h-screen w-full flex-col justify-center p-3">
        <div
          className="flex h-5/6 w-full overflow-auto bg-white shadow"
          id="unsolved-scroll"
        >
          <table className="h-full w-full table-auto object-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="dark:border-dark-5 whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  -
                </th>
                <th className="dark:border-dark-5 whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  번호
                </th>
                <th className="dark:border-dark-5 whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  대분류
                </th>
                <th className="dark:border-dark-5 whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  중분류
                </th>
                <th className="dark:border-dark-5 whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  소분류
                </th>
                <th className="dark:border-dark-5 whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  질문
                </th>
                <th className="dark:border-dark-5 whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  답변
                </th>
                <th className="dark:border-dark-5 whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  ars 번호, url
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-50">
              {IdList.map((id) => (
                <tr key={id} className="text-gray-700">
                  <td className="dark:border-dark-5 w-12 border p-2 pl-4">
                    <input
                      type="checkbox"
                      id={`checkbox-${id}`}
                      onChange={(e) => onChangeEach(e, id)}
                      checked={CheckList.includes(id)}
                    />
                  </td>
                  <td className="dark:border-dark-5 w-12 border p-2 pl-4">
                    {id}
                  </td>
                  <td className="dark:border-dark-5 flex justify-center border p-2">
                    **** 확인
                  </td>
                  <td className="dark:border-dark-5 border p-2">-</td>
                  <td className="dark:border-dark-5 border p-2">-</td>
                  <td className="dark:border-dark-5 border p-2">-</td>
                  <td className="dark:border-dark-5 border p-2">-</td>
                  <td className="dark:border-dark-5 w-16 border p-2 pl-4">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row justify-center">
          <div class="item flex h-full grow items-center justify-center">
            <div className="ml-40 mt-3 flex h-10 w-40 items-center justify-center rounded-md border border-indigo-300 bg-indigo-100">
              추가하기
            </div>
          </div>
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
                  수정하기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SenarioControl;
