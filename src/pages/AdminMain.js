import AdminHeader from "../component/layout/AdminHeader";
import AgeStartup from "../component/charts/AgeStartup";
import Country from "../component/charts/Country";
import FAQ from "../component/table/FAQ";
import Unsolved from "../component/table/Unsolved";

const AdminMain = () => {
  return (
    <>
      <AdminHeader />
      <div className="grid max-h-full flex-1 grid-cols-2 bg-stone-100">
        <div className="grid h-full">
          <div className="flex flex-row">
            <section className="ml-5 mt-5 w-8/12 ring-1 ring-inset ring-gray-300">
              <AgeStartup />
            </section>
            <section className="ml-5 mt-5 w-4/12 ring-1 ring-inset ring-gray-300">
              123
            </section>
          </div>
          <div className="flex h-full">
            <div className="flex flex-row ">
              <section className="ml-5 mt-5 w-7/12 ring-1 ring-inset ring-gray-300">
                <Country />
              </section>
              <section className="ml-5 mt-5 w-5/12 ring-1 ring-inset ring-gray-300">
                <FAQ />
              </section>
            </div>
          </div>
        </div>
        <div className="m-5 flex h-full justify-center">
          <Unsolved />
        </div>
      </div>
    </>
  );
};

export default AdminMain;
