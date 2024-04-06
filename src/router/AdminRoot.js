import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminRoot() {
  const navigate = useNavigate();

  useEffect(() => {
    const phone = localStorage.getItem("phone");
    if (phone === "ADMIN") {
      navigate("/admin"); // phone 값이 "ADMIN"일 경우에만 /admin으로 이동
    } else {
      navigate("/chat"); // 그 외의 경우에는 Chat 페이지로 이동
    }
  }, [navigate]);

  return null;
}

export default AdminRoot;
