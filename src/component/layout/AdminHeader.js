import React from "react";
import { useNavigate } from "react-router-dom";
import "../charts/Font.css";

const AdminHeader = () => {
  const navigate = useNavigate();
  // 로그아웃 처리 함수
  const handleLogout = () => {
    // 세션 스토리지의 전화번호 값 비우기
    window.sessionStorage.removeItem("phone");
    // 기타 로그아웃 처리 로직 추가 가능
    navigate("/");
  };

  return (
    <nav id="navbar2" className="flex" style={{ fontFamily: "JalnanGothic" }}>
      <div className="flex h-full w-full items-center">
        <div className="flex p-5 pl-10 text-3xl">서비스 대시보드</div>
      </div>
      <div className="flex w-1/5 items-center justify-end p-4 font-medium">
        <button className="m-1 rounded text-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminHeader;
