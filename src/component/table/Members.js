import axios from "axios";
import { useEffect, useState } from "react";
import "../charts/Font.css";
import MemberControl from "../layout/MemberControl";

const Members = () => {
  const [CheckList, setCheckList] = useState([]);
  const [memberList, setMemberList] = useState([]);

  // 30개의 답변을 저장할 수 있는 배열 생성
  const [setAnswers] = useState(Array.from({ length: 30 }, () => ""));

  // 멤버리스트 불러오기 추가
  useEffect(() => {
    axios
      .get("http://43.201.239.119:8081/admin/member")
      .then((response) => {
        const memberList = response.data;
        setMemberList(memberList);
      })
      .catch((error) => {
        console.error("데이터 요청 실패", error);
      });
  }, []);

  const onChangeEach = (e, id_mem) => {
    if (e.target.checked) {
      setCheckList((prevCheckList) => [...prevCheckList, id_mem]); // 이전 상태를 이용하여 업데이트
    } else {
      setCheckList((prevCheckList) =>
        prevCheckList.filter((checkedId) => checkedId !== id_mem),
      ); // 이전 상태를 이용하여 업데이트
    }
  };

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
    alert("회원정보가 수정되었습니다");
  };

  const handleDelete = () => {
    alert("회원정보가 삭제되었습니다");
  };

  return (
    <>
      <div className="mx-auto flex h-screen w-full flex-col justify-start overflow-x-auto p-3 px-16">
        <MemberControl />

        <div className="flex h-3/4 w-full" id="unsolved-scroll">
          <table
            className="flex h-full min-h-0 w-full flex-col object-center shadow-lg ring-1 ring-inset ring-gray-300"
            style={{ fontFamily: "Pretendard-Regular" }}
          >
            <thead className="flex w-full flex-col bg-gray-100">
              <tr className="flex">
                <th className="flex w-16 cursor-default justify-center whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  -
                </th>
                <th className="flex w-16 cursor-default justify-center whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  No
                </th>
                <th className="flex w-64 cursor-default justify-center whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  닉네임
                </th>
                <th className="flex w-28 cursor-default justify-center whitespace-nowrap border p-2 pl-5 text-xl font-bold leading-6 text-gray-900 hover:bg-blue-100 hover:active:bg-blue-200">
                  국적
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
                <th className="flex w-56 cursor-default justify-center whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900">
                  전화번호
                </th>
                <th className="flex w-56 cursor-default justify-center whitespace-nowrap border p-2 pl-5 text-xl font-bold leading-6 text-gray-900 hover:bg-blue-100 hover:active:bg-blue-200">
                  생년월일
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
                <th className="flex w-28 cursor-default justify-center whitespace-nowrap border p-2 pl-5 text-xl font-bold leading-6 text-gray-900 hover:bg-blue-100 hover:active:bg-blue-200">
                  성별
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
                <th className="flex w-52 cursor-default justify-center whitespace-nowrap border p-2 text-xl font-bold leading-6 text-gray-900 hover:bg-blue-100 hover:active:bg-blue-200">
                  사업자 등록증 여부
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
                <th className="flex flex-1 cursor-default justify-center whitespace-nowrap border p-2 pl-4 text-xl font-bold leading-6 text-gray-900 hover:bg-blue-100 hover:active:bg-blue-200">
                  가입일자
                  <button className="ml-1 flex items-center">
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
              </tr>
            </thead>

            <tbody className="flex min-h-0 w-full flex-1 flex-col bg-gray-50">
              <div className="flex h-full w-full flex-col overflow-auto">
                {memberList.map((member, index) => (
                  <tr key={index} className="flex w-full text-gray-700">
                    <td className="flex w-16 items-center justify-center border">
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        onChange={(e) =>
                          e.target.checked
                            ? setCheckList((prevCheckList) => [
                                ...prevCheckList,
                                index,
                              ])
                            : setCheckList((prevCheckList) =>
                                prevCheckList.filter(
                                  (checkedId) => checkedId !== index,
                                ),
                              )
                        }
                        checked={CheckList.includes(index)}
                      />
                    </td>
                    <td className="flex w-16 cursor-default items-center justify-center border">
                      {index + 1}
                    </td>
                    <td className="flex w-64 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                        type="input"
                        defaultValue={member.name}
                      />
                    </td>
                    <td className="flex w-28 border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                        type="input"
                        defaultValue={member.nation}
                      />
                    </td>
                    <td className="flex w-56 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                        type="input"
                        defaultValue={member.phone}
                      />
                    </td>
                    <td className="flex w-56 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                        type="input"
                        defaultValue={member.age}
                      />
                    </td>
                    <td className="flex w-28 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                        type="input"
                        defaultValue={member.gender}
                      />
                    </td>
                    <td className="flex w-52 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                        type="input"
                        defaultValue={member.start ? "Yes" : "No"}
                      />
                    </td>
                    <td className="flex flex-1 justify-center border">
                      <input
                        className="flex h-full w-full cursor-default rounded-md border border-white bg-transparent p-2 text-center hover:border-blue-300 focus:border-blue-300 focus:outline-none"
                        type="input"
                        defaultValue={member.join_dt.join("-")}
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

export default Members;
