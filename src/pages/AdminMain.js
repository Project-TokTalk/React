import AdminHeader from "../component/layout/AdminHeader";
import AgeStartup from "../component/charts/AgeStartup";
import Country from "../component/charts/Country";
import FAQ from "../component/table/FAQ";
import Unsolved from "../component/table/Unsolved";
import Chatbot from "./Chatbot";
import SenarioControl from "../component/table/SenarioControl"
import MemberControl from "../component/layout/MemberControl";
import SenarioHeader from "../component/layout/SenarioHeader";
import ChatbotHeader from "../component/layout/ChatbotHeader";
import Members from "../component/table/Members";
import UnsolvedHeader from "../component/layout/UnsolveHeader";

const AdminMain = () => {
  return (
    <>
      <AdminHeader />
      {/* 사이드바 배치를 위해 전체 요소에서 10px의 좌측마진 배치 */}
      <div className="ml-10 grid max-h-full flex-1 grid-cols-1 bg-stone-100 max-w-full">
        <div className="grid h-full">
          <div className="flex flex-row">
            <section className="ml-7 mt-10 w-1/2 ring-1 ring-inset ring-gray-300">
              <AgeStartup /> 
            </section>
            <section className="ml-5 mt-10 w-1/2 ring-1 ring-inset ring-gray-300 mr-5">
              GenderPage
            </section>
          </div>
          <div className="grid h-full">
            <div className="flex flex-row ">
              <section className="ml-7 mt-5 w-1/2 ring-1 ring-inset ring-gray-300">
                <Country />
              </section>
              <section className="ml-5 mt-5 w-1/2 ring-1 ring-inset ring-gray-300 mr-5">
                <FAQ />
              </section>
            </div>
          </div>
        </div>
      </div>
      <UnsolvedHeader/>
      <div className="ml-10 grid max-h-full flex-1 grid-cols-1 bg-stone-100 max-w-full">
        <div className="grid h-full">
          <div className="m-5 flex h-4/5 w-full justify-center"> 
            <Unsolved />
          </div>
        </div>
      </div>
      <MemberControl/>
      <div className="ml-10 grid max-h-full flex-1 grid-cols-1 bg-stone-100 max-w-full">
        <div className="grid h-full">
          <div className="m-5 flex h-4/5 w-full justify-center"> 
            <Members />
          </div>
        </div>
      </div>
      <SenarioHeader/>
      <div className="ml-10 grid max-h-full flex-1 grid-cols-1 bg-stone-100 max-w-full">
        <div className="grid h-full">
          <div className="m-5 flex h-4/5 w-full justify-center"> 
            <SenarioControl />
          </div>
        </div>
      </div>
      <ChatbotHeader/>
      <div className="ml-10 grid max-h-full flex-1 grid-cols-1 bg-stone-100 max-w-full">
        <div className="grid h-full">
          <div className="m-5 flex h-4/5 w-full justify-center"> 
            idontknowthat
          </div>
        </div>
      </div>
      <Chatbot />
    </>
  );
};

export default AdminMain;
