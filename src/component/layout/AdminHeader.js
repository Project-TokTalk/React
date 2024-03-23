const AdminHeader = () => {
  return (
    <nav id="navbar" className=" flex bg-blue-300">
      <div className="flex h-full w-4/5 items-center bg-gray-500">
        <div className="flex p-3 px-5 text-3xl font-bold text-white">
          서비스 대시보드
        </div>
      </div>
      <div className="flex w-1/5 justify-end bg-orange-300 p-4 font-medium">
        <div className="m-1 rounded text-sm text-white">Logout</div>
      </div>
    </nav>
  );
};

export default AdminHeader;
