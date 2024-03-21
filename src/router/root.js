import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>

const Loginpage =  lazy(() => import("../pages/Loginpage"))
const Signin =  lazy(() => import("../pages/Signin"))
const Chatbot =  lazy(() => import("../pages/Chatbot"))
const Admin_main =  lazy(() => import("../pages/Admin_main"))



const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Loginpage/></Suspense>
    },
    {
        path: "signin",
        element: <Suspense fallback={Loading}><Signin/></Suspense>
    },
    {
        path: "chat",
        element: <Suspense fallback={Loading}><Chatbot/></Suspense>,
    },
    {
        path: "admin",
        element: <Suspense fallback={Loading}><Admin_main/></Suspense>,
    }

])

export default root;