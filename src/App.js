import React, { useState } from "react";
import "./App.css";
import ColorGenerator from "./Components/Home/home";
import ColorPicker from "./Components/ColorPicker/colorpicker";
import Header from "./Components/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/about";
function App() {
  return (
    //     <div className="app__container">
    //       <Header/>
    // <ColorPicker/>
    //     </div>
    <div>

      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/home" element={<ColorGenerator/>}></Route>
          <Route path="/colorpicker" element={<ColorPicker />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
