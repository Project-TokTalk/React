import { useState, useRef } from "react";
import AdminHeader from "../component/layout/AdminHeader";
import AgeStartup from "../component/charts/AgeStartup";
import Country from "../component/charts/Country";
import FAQ from "../component/table/FAQ";
import Unsolved from "../component/table/Unsolved";
import Chatbot from "./Chatbot";
import SenarioControl from "../component/table/SenarioControl";
import MemberControl from "../component/layout/MemberControl";
import SenarioHeader from "../component/layout/SenarioHeader";
import ChatbotHeader from "../component/layout/ChatbotHeader";
import Members from "../component/table/Members";
import UnsolvedHeader from "../component/layout/UnsolveHeader";
import home from "../image/home.png";
import chat from "../image/chat.png";
import human from "../image/human.png";
import scenario from "../image/scenario.png";
import AdminChat from "../component/table/AdminChat";
import Test3 from "./Test3";

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
        className={`fixed z-50 flex h-screen w-60 ${isSidebarOpen ? "translate-x-none" : "-translate-x-48"} transform bg-[#1E293B] transition duration-1000 ease-in-out`}
      >
        {/* open sidebar button 버튼 */}
        <div
          className={`absolute -right-6 top-2 flex h-12 w-full ${isSidebarOpen ? "translate-x-0" : "translate-x-24 scale-x-0"} transform items-center justify-between rounded-full border-4 border-white bg-[#1E293B]  transition duration-300 ease-in dark:border-[#0F172A]`}
        >
          <div className="group flex w-full items-center justify-end space-x-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 py-1  pl-10 pr-2 text-white dark:from-cyan-500 dark:to-blue-500  ">
            <div className="mr-12 transform duration-300 ease-in-out">
              Toktalk
            </div>
          </div>
        </div>
        <div
          onClick={openNav}
          className="absolute -right-6 top-2 flex transform rounded-full border-4 border-white bg-[#1E293B] p-3 text-white transition duration-500 ease-in-out hover:rotate-45 hover:bg-purple-500 dark:border-[#0F172A] dark:hover:bg-blue-500"
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
          className={`mt-20 ${isSidebarOpen ? "flex" : "hidden"} h-[calc(100vh)] w-full flex-col space-y-2 text-white`}
        >
          <div
            className="flex w-full transform flex-row items-center space-x-3 rounded-full bg-[#1E293B] p-2 pl-8 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 dark:hover:text-blue-500"
            onClick={() => onMoveToElement(homeRef)}
          >
            <img src={home} alt="home" className="h-6 w-6" />
            <div className="text-white">서비스 대시보드</div>
          </div>
          <div
            className="flex w-full transform flex-row items-center space-x-3 rounded-full bg-[#1E293B] p-2 pl-8 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 dark:hover:text-blue-500"
            onClick={() => onMoveToElement(unsolvedRef)}
          >
            <img src={chat} alt="chat" className="h-6 w-6" />
            <div>미응답 질문</div>
          </div>
          <div
            className="flex w-full transform flex-row items-center space-x-3 rounded-full bg-[#1E293B] p-2 pl-8 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 dark:hover:text-blue-500"
            onClick={() => onMoveToElement(chatRef)}
          >
            <img src={chat} alt="chat" className="h-6 w-6" />
            <div>챗봇 사용 이력</div>
          </div>
          <div
            className="flex w-full transform flex-row items-center space-x-3 rounded-full bg-[#1E293B] p-2 pl-8 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 dark:hover:text-blue-500"
            onClick={() => onMoveToElement(scenarioRef)}
          >
            <img src={scenario} alt="scenario" className="h-6 w-6" />
            <div>시나리오 관리</div>
          </div>
          <div
            className="flex w-full transform flex-row items-center space-x-3 rounded-full bg-[#1E293B] p-2 pl-8 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 dark:hover:text-blue-500"
            onClick={() => onMoveToElement(humanRef)}
          >
            <img src={human} alt="human" className="h-6 w-6" />
            <div>회원관리</div>
          </div>
        </div>
        {/* MINI SIDEBAR 설정 */}
        <div
          className={`mt-20 ${isSidebarOpen ? "hidden" : "flex"} h-[calc(100vh)] w-full flex-col space-y-2`}
        >
          <div
            className="flex w-full transform justify-end rounded-full bg-[#1E293B] p-3 pr-4 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 dark:hover:text-blue-500"
            onClick={() => onMoveToElement(homeRef)}
          >
            <img src={home} alt="home" className="h-6 w-6" />
          </div>
          {/* 이거 아이콘 수정 */}
          <div
            className="flex w-full transform justify-end rounded-full bg-[#1E293B] p-3 pr-4 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 dark:hover:text-blue-500"
            onClick={() => onMoveToElement(unsolvedRef)}
          >
            <img src={chat} alt="chat" className="h-6 w-6" />
          </div>
          <div
            className="flex w-full transform justify-end rounded-full bg-[#1E293B] p-3 pr-4 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 dark:hover:text-blue-500"
            onClick={() => onMoveToElement(chatRef)}
          >
            <img src={chat} alt="chat" className="h-6 w-6" />
          </div>
          <div
            className="flex w-full transform justify-end rounded-full bg-[#1E293B] p-3 pr-4 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 dark:hover:text-blue-500"
            onClick={() => onMoveToElement(scenarioRef)}
          >
            <img src={scenario} alt="scenario" className="h-6 w-6" />
          </div>
          <div
            className="flex w-full transform justify-end rounded-full bg-[#1E293B] p-3 pr-4 text-white duration-300 ease-in-out hover:ml-4 hover:text-purple-500 dark:hover:text-blue-500"
            onClick={() => onMoveToElement(humanRef)}
          >
            <img src={human} alt="human" className="h-6 w-6" />
          </div>
        </div>
      </aside>
      <div
        className={`${isSidebarOpen ? "ml-60" : "ml-12"} transform pb-4 duration-500 ease-in-out`}
      >
        <div ref={homeRef}></div>
        <AdminHeader />
        <div className="grid h-screen max-w-full flex-1 grid-cols-1 bg-stone-100">
          <div className="grid h-full">
            <div className="flex flex-row">
              <section className="ml-5 mt-5 w-1/2 ring-1 ring-inset ring-gray-300">
                <AgeStartup />
              </section>
              <section className="ml-5 mr-5 mt-5 w-1/2 ring-1 ring-inset ring-gray-300">
                GenderPage
              </section>
            </div>
            <div className="grid h-full">
              <div className="flex flex-row ">
                <section className="mb-5 ml-5 mt-5 w-1/2 ring-1 ring-inset ring-gray-300">
                  <Country />
                </section>
                <section className="m-5 h-1/2 w-1/2 ring-1 ring-inset ring-gray-300">
                  <FAQ />
                </section>
              </div>
            </div>
          </div>
        </div>
        <div ref={unsolvedRef}></div>
        <UnsolvedHeader />
        <div className="grid max-h-full max-w-full flex-1 grid-cols-1 bg-stone-100">
          <div className="grid h-full">
            <div className="m-5 flex h-4/5 w-full justify-center">
              <Unsolved />
            </div>
          </div>
        </div>
        <div ref={humanRef}></div>
        <MemberControl />
        <div className="grid max-h-full max-w-full flex-1 grid-cols-1 bg-stone-100">
          <div className="grid h-full">
            <div className="m-5 flex h-4/5 w-full justify-center">
              <Members />
            </div>
          </div>
        </div>
        <div ref={scenarioRef}></div>
        <SenarioHeader />
        <div className="grid max-h-full max-w-full flex-1 grid-cols-1 bg-stone-100">
          <div className="grid h-full">
            <div className="m-5 flex h-4/5 w-full justify-center">
              <SenarioControl />
            </div>
          </div>
        </div>
        <div ref={chatRef}></div>
        <ChatbotHeader />
        <div className="grid max-h-full max-w-full flex-1 grid-cols-1 bg-stone-100">
          <div className="grid h-full">
            <div className="flex h-4/5 w-full justify-center">
              <Test3 />
            </div>
          </div>
        </div>
      </div>
      <Chatbot />
    </>
  );
};

export default AdminMain;
