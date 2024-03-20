import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>

const LoginPage =  lazy(() => import("../pages/LoginPage"))
const SignIn =  lazy(() => import("../pages/SignIn"))
const Chatbot =  lazy(() => import("../pages/Chatbot"))



const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><LoginPage/></Suspense>
    },
    {
        path: "signin",
        element: <Suspense fallback={Loading}><SignIn/></Suspense>
    },
    {
        path: "chat",
        element: <Suspense fallback={Loading}><Chatbot/></Suspense>,
    }

])

export default root;