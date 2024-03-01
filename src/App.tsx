// import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      {/* <Header/> */}
      <Outlet />
    </>
  )
}

export default App
