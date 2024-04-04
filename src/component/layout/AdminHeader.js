const AdminHeader = () => {
  return (
    <nav id="navbar" className="flex">
      <div className="flex h-full w-4/5 items-center">
        <div className="flex p-3 px-10 text-3xl font-bold">서비스 대시보드</div>
      </div>
      <div className="flex w-1/5 items-center justify-end p-4 font-medium">
        <div className="m-1 rounded text-sm ">Logout</div>
      </div>
    </nav>
  );
};

export default AdminHeader;
