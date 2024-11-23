import React from "react";
import Loader from './components/Loader'
import Projects from "./pages/Projects";

const App = () => {

  

  return (
    <>
    <Loader />
    <Projects />
    <div id='main' className="relative z-10">
    <h1></h1>
    </div>
    </>
  )
}

export default App
