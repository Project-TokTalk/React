import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>

const LoginPage =  lazy(() => import("../pages/LoginPage"))
const SigIn =  lazy(() => import("../pages/SigIn"))

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><LoginPage/></Suspense>
    },
    {
        path: "signin",
        element: <Suspense fallback={Loading}><SigIn/></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><SigIn/></Suspense>,
    },
    {
        path: "login",
        element: <Suspense fallback={Loading}><SigIn/></Suspense>,
    }

])

export default root;