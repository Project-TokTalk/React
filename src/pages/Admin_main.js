import Admin_header from "../layout/Admin_header";
import Age_startup from "../charts/Age_startup";
const Admin_main = () => {
  return (
    <>
      <Admin_header />
      <div className="grid h-full flex-1  grid-cols-2">
        <div className="grid grid-rows-2 ring-1 ring-inset ring-amber-300">
          <div className="grid grid-cols-12 ring-1 ring-inset ring-green-300">
            <section className="col-span-8 m-5 ring-1 ring-inset ring-gray-300">
              <Age_startup />
            </section>
            <section className="col-span-4 m-5 ring-1 ring-inset ring-gray-300">
              4
            </section>
          </div>
          <div className="grid grid-cols-12 ring-1 ring-inset ring-green-300">
            <section className="col-span-7 m-5 ring-1 ring-inset ring-gray-300">
              7
            </section>
            <section className="col-span-5 m-5 ring-1 ring-inset ring-gray-300">
              5
            </section>
          </div>
        </div>
        <div className="flex justify-center">qweqe</div>
      </div>
    </>
  );
};

export default Admin_main;
