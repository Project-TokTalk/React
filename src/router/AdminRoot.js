import React from "react";
import { Redirect, Route } from "react-router-dom";

// 관리자 로그인 시 이동 경로 설정
// 삭제 예정
function AdminRoot({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("ADMIN") ? ( // 관리자인지 먼저 확인
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "../pages/Chatbot",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default AdminRoot;
