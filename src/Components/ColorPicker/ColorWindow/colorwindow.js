import React, { useState } from "react";
import "./colorwindow.css";
const ColorWindow = () => {
  const [color, setColor] = useState("#696969");
  const updateColor = (e) => {
    setColor(e.target.value);
  };
  const copyColor = () => {
    navigator.clipboard.writeText(color);
  };

const backgroundStyle = {
    backgroundColor: color
}
  return (
    <div>
      <div className="inputContainer">
        <h4 className="colorWindow__Title">Select a color:</h4>
        <input type="color" onChange={updateColor} className="colorWindow__input"></input>
      </div>
      <div className="colorWindow__container" onClick={copyColor} style={backgroundStyle}>
        <p className="colorWindow__text">Copy to clipboard</p>
      </div>
    </div>
  );
};

export default ColorWindow;
