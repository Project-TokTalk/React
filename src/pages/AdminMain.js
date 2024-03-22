import Admin_header from "../component/layout/Admin_header";
import Graph from "../component/charts/Age_startup";
import Country from "../component/charts/Country";
import FAQ from "../component/table/FAQ";

const AdminMain = () => {
  return (
    <>
      <Admin_header />
      <div className="grid h-5/6 flex-1  grid-cols-2">
        <div>
          <div className="grid grid-cols-12">
            <section className="col-span-8 m-5 ring-1 ring-inset ring-gray-300">
              <Graph />
            </section>
            <section className="col-span-4 m-5 ring-1 ring-inset ring-gray-300">
              4
            </section>
          </div>
          <div>
            <div className="grid grid-cols-12">
              <section className="col-span-7 m-5 ring-1 ring-inset ring-gray-300">
                <Country />
              </section>
              <section className="col-span-5 m-5 ring-1 ring-inset ring-gray-300">
                <FAQ />
              </section>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default AdminMain;
