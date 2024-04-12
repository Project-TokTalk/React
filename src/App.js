import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import { useEffect } from "react";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return <RouterProvider router={root} />;
}

export default App;
