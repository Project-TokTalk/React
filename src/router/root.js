import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>

const LoginPage =  lazy(() => import("../pages/LoginPage"))
const SignIn =  lazy(() => import("../pages/SignIn"))

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><LoginPage/></Suspense>
    },
    {
        path: "signin",
        element: <Suspense fallback={Loading}><SignIn/></Suspense>
    }
    // ,
    // {
    //     path: "test",
    //     element: <Suspense fallback={Loading}><Test/></Suspense>,
    // },
    // {
    //     path: "login",
    //     element: <Suspense fallback={Loading}><SigIn/></Suspense>,
    // }

])

export default root;