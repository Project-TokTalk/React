import { useState, useEffect } from "react";

const Unsolved = () => {
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
                <th className="whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  -
                </th>
                <th className="whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  미해결 질문
                </th>
                <th className="whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  추가할 답안
                </th>
                <th className="whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900"></th>
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
                </tr>
              ))}

              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">2</td>
                <td className="border p-2">Eric</td>
                <td className="border p-2">Prouve</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">3</td>
                <td className="border p-2">Julien</td>
                <td className="border p-2">Clai</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">4</td>
                <td className="border p-2">Igor</td>
                <td className="border p-2">Louth</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className=" text-gray-700">
                <td className="w-12 border p-2 pl-4 ">5</td>
                <td className="border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td className="border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">6</td>
                <td className="border p-2">Eric</td>
                <td className="border p-2">Prouve</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">7</td>
                <td className="border p-2">Julien</td>
                <td className="border p-2">Clai</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">8</td>
                <td className="border p-2">Igor</td>
                <td className="border p-2">Louth</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className=" text-gray-700">
                <td className="w-12 border p-2 pl-4 ">9</td>
                <td className="border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td className="border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">10</td>
                <td className="border p-2">Eric</td>
                <td className="border p-2">Prouve</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">11</td>
                <td className="border p-2">Julien</td>
                <td className="border p-2">Clai</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">12</td>
                <td className="border p-2">Igor</td>
                <td className="border p-2">Louth</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className=" text-gray-700">
                <td className="w-12 border p-2 pl-4 ">13</td>
                <td className="border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td className="border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">14</td>
                <td className="border p-2">Eric</td>
                <td className="border p-2">Prouve</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">15</td>
                <td className="border p-2">Julien</td>
                <td className="border p-2">Clai</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">16</td>
                <td className="border p-2">Igor</td>
                <td className="border p-2">Louth</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className=" text-gray-700">
                <td className="w-12 border p-2 pl-4 ">17</td>
                <td className="border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td className="border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">18</td>
                <td className="border p-2">Eric</td>
                <td className="border p-2">Prouve</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">19</td>
                <td className="border p-2">Julien</td>
                <td className="border p-2">Clai</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">20</td>
                <td className="border p-2">Igor</td>
                <td className="border p-2">Louth</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">10</td>
                <td className="border p-2">Eric</td>
                <td className="border p-2">Prouve</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">11</td>
                <td className="border p-2">Julien</td>
                <td className="border p-2">Clai</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">12</td>
                <td className="border p-2">Igor</td>
                <td className="border p-2">Louth</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className=" text-gray-700">
                <td className="w-12 border p-2 pl-4 ">13</td>
                <td className="border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td className="border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">14</td>
                <td className="border p-2">Eric</td>
                <td className="border p-2">Prouve</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">15</td>
                <td className="border p-2">Julien</td>
                <td className="border p-2">Clai</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">16</td>
                <td className="border p-2">Igor</td>
                <td className="border p-2">Louth</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className=" text-gray-700">
                <td className="w-12 border p-2 pl-4 ">17</td>
                <td className="border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td className="border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">18</td>
                <td className="border p-2">Eric</td>
                <td className="border p-2">Prouve</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">19</td>
                <td className="border p-2">Julien</td>
                <td className="border p-2">Clai</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">20</td>
                <td className="border p-2">Igor</td>
                <td className="border p-2">Louth</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">11</td>
                <td className="border p-2">Julien</td>
                <td className="border p-2">Clai</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">12</td>
                <td className="border p-2">Igor</td>
                <td className="border p-2">Louth</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className=" text-gray-700">
                <td className="w-12 border p-2 pl-4 ">13</td>
                <td className="border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td className="border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">14</td>
                <td className="border p-2">Eric</td>
                <td className="border p-2">Prouve</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">15</td>
                <td className="border p-2">Julien</td>
                <td className="border p-2">Clai</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">16</td>
                <td className="border p-2">Igor</td>
                <td className="border p-2">Louth</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className=" text-gray-700">
                <td className="w-12 border p-2 pl-4 ">17</td>
                <td className="border p-2">
                  Jean Marc Jean Marc Jean Marc Jean MarcJean Marc Jean Marc
                  Jean Marc Jean Marc{" "}
                </td>
                <td className="border p-2">
                  Louis Louis Louis Louis Louis Louis Louisouis Louis Louis
                  Louis Louis Louis Louis{" "}
                </td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">18</td>
                <td className="border p-2">Eric</td>
                <td className="border p-2">Prouve</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">19</td>
                <td className="border p-2">Julien</td>
                <td className="border p-2">Clai</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
              <tr className="text-gray-700">
                <td className="w-12 border p-2 pl-4 ">20</td>
                <td className="border p-2">Igor</td>
                <td className="border p-2">Louth</td>
                <td className=" w-16 border p-2 pl-4">등록</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-row justify-center">
          <div class="item flex h-full grow items-center justify-center"></div>
          <div class="flex h-full flex-none items-center justify-center text-center">
            <div class="flex items-center space-x-3 px-3">
              <div class="flex flex-none justify-center"></div>

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
