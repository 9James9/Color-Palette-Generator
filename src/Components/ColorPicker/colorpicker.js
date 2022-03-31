import React, { useState, useEffect } from "react";
import "./colorpicker.css";
import ColorWindow from "./ColorWindow/colorwindow";
const ColorPicker = () => {
    const [color, setColor] = useState('#696969')
    useEffect(() => {
        document.querySelector('.colorDisplay').style.backgroundColor = color
    },[color])
    const copyColorToClipboard = () => {
        navigator.clipboard.writeText(color)
    }
  return (
    <div className="container">
      <div className="colorPicker">
          <div className="colorPicker__title--container">
              <h2>Choose a color</h2>
          </div>
        <form>
          <input
            type="color"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              copyColorToClipboard()
            }}
          >
            Copy to clipboard
          </button>
          <div className="colorDisplay">
              <h1>YOOOOO</h1>
              <ColorWindow color={color} copy={copyColorToClipboard}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ColorPicker;
