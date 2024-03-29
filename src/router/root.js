import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>;

const InitPage = lazy(() => import("../pages/InitPage"));
const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const UserEdit = lazy(() => import("../pages/UserEdit"));
const Chatbot = lazy(() => import("../pages/Chatbot"));
const AdminMain = lazy(() => import("../pages/AdminMain"));
const AdminEdit = lazy(() => import("../pages/AdminEdit "));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <InitPage />
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
        <Chatbot />
      </Suspense>
    ),
  },
  {
    path: "admin",
    element: (
      <Suspense fallback={Loading}>
        <AdminMain />
      </Suspense>
    ),
  },
  {
    path: "edit",
    element: (
      <Suspense fallback={Loading}>
        <AdminEdit />
      </Suspense>
    ),
  },
]);

export default root;
