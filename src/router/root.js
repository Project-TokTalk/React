import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>;

const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const UserEdit = lazy(() => import("../pages/UserEdit"));
const Chat = lazy(() => import("../chatbot/Chat"));
const AdminRoot = lazy(() => import("./AdminRoot"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: "signin",
    element: (
      <Suspense fallback={Loading}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: "signup",
    element: (
      <Suspense fallback={Loading}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "useredit",
    element: (
      <Suspense fallback={Loading}>
        <UserEdit />
      </Suspense>
    ),
  },
  {
    path: "chat",
    element: (
      <Suspense fallback={Loading}>
        <Chat />
      </Suspense>
    ),
  },
  {
    path: "admin",
    element: (
      <Suspense fallback={Loading}>
        <AdminRoot />
      </Suspense>
    ),
  },
]);

export default root;
