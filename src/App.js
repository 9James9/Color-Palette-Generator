import React, { useState } from "react";
import "./App.css";
import Saved from "./Components/Saved/saved";
import ColorPicker from "./Components/ColorPicker/colorpicker";
import Header from "./Components/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/about";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/saved" element={<Saved/>}></Route>
          <Route path="/" element={<ColorPicker />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
