import React from "react";
import { useNavigate } from "react-router-dom";
import AdminMain from "../pages/AdminMain"; // AdminMain 컴포넌트 import
import Chat from "../chatbot/Chat"; // Chat 컴포넌트 import

function AdminRoot() {
  const sessionPhone = window.sessionStorage.getItem("phone");
  const navigate = useNavigate();

  // sessionPhone이 "ADMIN"인 경우에는 AdminMain을, 그렇지 않은 경우에는 Chat을 반환합니다.
  return sessionPhone === "ADMIN" ? <AdminMain /> : <Chat />;
}
export default AdminRoot;
