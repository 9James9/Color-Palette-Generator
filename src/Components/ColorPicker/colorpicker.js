import React, { useState, useEffect } from "react";
import "./colorpicker.css";
import ColorWindow from "./ColorWindow/colorwindow";
const ColorPicker = () => {
    const [color, setColor] = useState('#fff')
    useEffect(() => {
        document.querySelector('.colorDisplay').style.backgroundColor = color
    },[color])
    const copyColorToClipboard = () => {
        navigator.clipboard.writeText(color)
    }
  return (
    <div className="container">

          <div className="colorDisplay">
              <ColorWindow color={color} copy={copyColorToClipboard}/>
          </div>

      </div>
  );
};

export default ColorPicker;
