import React, { useState } from "react";
import "./App.css";
import ColorGenerator from "./Components/ColorGenerator/colorgenerator";
import ColorPicker from "./Components/ColorPicker/colorpicker";
import Header from "./Components/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    //     <div className="app__container">
    //       <Header/>
    // <ColorPicker/>
    //     </div>
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ColorPicker />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
