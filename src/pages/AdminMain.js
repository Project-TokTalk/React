import { useState, useRef } from "react";

import AdminHeader from "../component/layout/AdminHeader";
import AgeStartup from "../component/charts/AgeStartup";
import Country from "../component/charts/Country";
import Unsolved from "../component/table/Unsolved";
import Chat from "../chatbot/Chat";
import SenarioControl from "../component/table/SenarioControl";
import Members from "../component/table/Members";
import ChatRecord from "../component/table/ChatRecord";
import TokTalk from "../image/TokTalk.png";
import Gender from "../component/charts/Gender";
import DateGraph from "../component/charts/DateGraph";

const AdminMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 스크롤 이동을 위한 ref
  const homeRef = useRef(null);
  const unsolvedRef = useRef(null);
  const chatRef = useRef(null);
  const humanRef = useRef(null);
  const scenarioRef = useRef(null);

  // useMoveScroll 함수 호출하여 변수 받아오기
  const { onMoveToElement } = useMoveScroll();

  // 사이드바 on/off
  // 실질적인 요소 변경은 각각 클래스에서 수정
  const openNav = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // useMoveScroll 함수 정의 - 특정 위치로 이동
  function useMoveScroll() {
    const element = useRef(null);
    const onMoveToElement = (ref) => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return { element, onMoveToElement };
  }

  return (
    <>
      {/* 사이드 바 따로 분리하고 싶었으나 전체 페이지의 이동을 위해 여기로 합침 */}
      <aside
        className={`fixed z-50 flex h-screen w-60 ${
          isSidebarOpen ? "translate-x-none" : "-translate-x-48"
        } transform bg-[#1E293B] transition duration-1000 ease-in-out`}
      >
        {/* open sidebar button 버튼 */}
        <div
          className={`absolute -right-6 top-2 flex h-12 w-full ${
            isSidebarOpen ? "translate-x-0" : "translate-x-24 scale-x-0"
          } transform items-center justify-between rounded-full border-4 border-white bg-[#1E293B]  transition duration-300 ease-in dark:border-[#0F172A]`}
        >
          <div class="flex items-center space-x-2 pl-8 ">
            <div>
              <div class="text-white">
                <img src={TokTalk} alt="TokTalk" className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="group flex items-center space-x-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 py-1  pl-10 pr-2 text-white dark:from-cyan-500 dark:to-blue-500  ">
            <div className="mr-12 transform duration-300 ease-in-out">
              TokTalk
            </div>
          </div>
        </div>
        <div
          onClick={openNav}
          className="absolute -right-6 top-2 flex transform rounded-full border-4 border-white bg-[#1E293B] p-3 text-white transition duration-500 ease-in-out hover:rotate-45 hover:ring-2 hover:ring-inset hover:ring-purple-500 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
        </div>
        {/* MAX SIDEBAR 설정 */}
        <div
          className={`mt-20 ${
            isSidebarOpen ? "flex" : "hidden"
          } h-[calc(100vh)] w-full flex-col space-y-2 text-white`}
        >
          <button
            className="flex w-full transform flex-row items-center space-x-3 rounded-full bg-[#1E293B] p-2 pl-8 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 hover:ring-2 hover:ring-inset hover:ring-purple-500 "
            onClick={() => onMoveToElement(homeRef)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M10 12h4v4h-4z" />
            </svg>
            <div>서비스 대시보드</div>
          </button>

          <button
            className="flex w-full transform flex-row items-center space-x-3 rounded-full bg-[#1E293B] p-2 pl-8 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 hover:ring-2 hover:ring-inset hover:ring-purple-500 "
            onClick={() => onMoveToElement(chatRef)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
              <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
            </svg>
            <div>챗봇 사용 이력</div>
          </button>
          <button
            className="flex w-full transform flex-row items-center space-x-3 rounded-full bg-[#1E293B] p-2 pl-8 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 hover:ring-2 hover:ring-inset hover:ring-purple-500 "
            onClick={() => onMoveToElement(unsolvedRef)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M10 18l5 -5a1.414 1.414 0 0 0 -2 -2l-5 5v2h2z" />
            </svg>
            <div>응답 불가 질문</div>
          </button>
          <button
            className="flex w-full transform flex-row items-center space-x-3 rounded-full bg-[#1E293B] p-2 pl-8 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 hover:ring-2 hover:ring-inset hover:ring-purple-500 "
            onClick={() => onMoveToElement(humanRef)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            <div>회원관리</div>
          </button>
          <button
            className="flex w-full transform flex-row items-center space-x-3 rounded-full bg-[#1E293B] p-2 pl-8 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 hover:ring-2 hover:ring-inset hover:ring-purple-500 "
            onClick={() => onMoveToElement(scenarioRef)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
              <path d="M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1" />
              <path d="M11 7h5" />
              <path d="M11 10h6" />
              <path d="M11 13h3" />
            </svg>
            <div>시나리오 관리</div>
          </button>
        </div>
        {/* MINI SIDEBAR 설정 */}
        <div
          className={`mt-20 ${
            isSidebarOpen ? "hidden" : "flex"
          } h-[calc(100vh)] w-full flex-col space-y-2`}
        >
          <button
            className="flex w-full transform justify-end rounded-full bg-[#1E293B] p-3 pr-4 text-white duration-300 ease-in-out hover:ml-4 hover:ring-2 hover:ring-inset hover:ring-purple-500 "
            onClick={() => onMoveToElement(homeRef)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M10 12h4v4h-4z" />
            </svg>
          </button>

          <button
            className="flex w-full transform justify-end rounded-full bg-[#1E293B] p-3 pr-4 text-white duration-300 ease-in-out hover:ml-4 hover:ring-2 hover:ring-inset hover:ring-purple-500 "
            onClick={() => onMoveToElement(chatRef)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
              <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
            </svg>
          </button>
          <button
            className="flex w-full transform justify-end rounded-full bg-[#1E293B] p-3 pr-4 text-white duration-300 ease-in-out hover:ml-4 hover:ring-2 hover:ring-inset hover:ring-purple-500 "
            onClick={() => onMoveToElement(unsolvedRef)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M10 18l5 -5a1.414 1.414 0 0 0 -2 -2l-5 5v2h2z" />
            </svg>
          </button>
          <button
            className="flex w-full transform justify-end rounded-full bg-[#1E293B] p-3 pr-4 text-white duration-300 ease-in-out hover:ml-4 hover:ring-2 hover:ring-inset hover:ring-purple-500 "
            onClick={() => onMoveToElement(humanRef)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </button>
          <button
            className="flex w-full transform justify-end rounded-full bg-[#1E293B] p-3 pr-4 text-white duration-300 ease-in-out hover:ml-4 hover:ring-2 hover:ring-inset hover:ring-purple-500 "
            onClick={() => onMoveToElement(scenarioRef)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
              <path d="M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1" />
              <path d="M11 7h5" />
              <path d="M11 10h6" />
              <path d="M11 13h3" />
            </svg>
          </button>
        </div>
      </aside>
      <div
        className={`${
          isSidebarOpen ? "ml-60" : "ml-12"
        } transform bg-slate-50 pb-4 duration-500 ease-in-out`}
      >
        <div className="flex h-screen max-w-full pb-5 ring-1 ring-inset ring-gray-300">
          <div className="flex h-full w-full flex-col px-16">
            <div ref={homeRef}></div>
            <AdminHeader />

            <div className="flex flex-row">
              <section className="ml-5 w-1/2 bg-white ring-1 ring-inset ring-gray-300">
                <AgeStartup />
              </section>
              <section className="ml-5 mr-5 w-1/2 bg-white ring-1 ring-inset ring-gray-300">
                <Gender />
              </section>
            </div>

            <div className="flex flex-row">
              <section className="ml-5 mt-5 w-1/2 bg-white ring-1 ring-inset ring-gray-300">
                <Country />
              </section>
              <section className="ml-5 mr-5 mt-5 w-1/2 bg-white ring-1 ring-inset ring-gray-300">
                <DateGraph />
              </section>
            </div>
          </div>
        </div>

        <div className="grid max-w-full flex-1 grid-cols-1 ring-1 ring-inset ring-gray-300">
          <div ref={chatRef}></div>
          <div>
            <ChatRecord />
          </div>
        </div>

        <div className="grid max-h-full max-w-full flex-1 grid-cols-1 ring-1 ring-inset ring-gray-300">
          <div ref={unsolvedRef}></div>
          <div className="flex h-full w-full flex-col">
            <div className="flex h-4/5 w-full justify-center">
              <Unsolved />
            </div>
          </div>
        </div>

        <div className="grid max-h-full max-w-full flex-1 grid-cols-1 ring-1 ring-inset ring-gray-300">
          <div ref={humanRef}></div>

          <div className="grid h-full">
            <div className="flex h-4/5 w-full justify-center">
              <Members />
            </div>
          </div>
        </div>

        <div className="grid max-h-full max-w-full flex-1 grid-cols-1 ring-1 ring-inset ring-gray-300">
          <div ref={scenarioRef}></div>

          <div className="grid h-full">
            <div className="flex h-4/5 w-full justify-center">
              <SenarioControl />
            </div>
          </div>
        </div>
      </div>
      <Chat />
    </>
  );
};

export default AdminMain;
