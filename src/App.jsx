// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import React from "react";
import Learning from "./pages/Learning/Learning";

const today = new Date();
let user = {
  name: "Test",
  loggedIn: today,
};
let test = ["rohit", "sanpreet"];
function App() {
  return (
    <React.Fragment>
      <Navbar userInfo={user} testData={test} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
      {/* <Footer/> */}
    </React.Fragment>
  );
}

export default App;
