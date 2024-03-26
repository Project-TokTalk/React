import AdminHeader from "../component/layout/AdminHeader";
import AgeStartup from "../component/charts/AgeStartup";
import Country from "../component/charts/Country";
import FAQ from "../component/table/FAQ";
import Unsolved from "../component/table/Unsolved";

const AdminMain = () => {
  return (
    <>
      <AdminHeader />
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
        {/* <div className="m-5 flex h-full justify-center">
          <Unsolved />
        </div> */}
      </div>
    </>
  );
};

export default AdminMain;
