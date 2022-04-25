import React, { useState, useEffect } from "react";
import "./colorwindow.css";
const ColorWindow = ({random}) => {
  const [color, setColor] = useState("#696969");
  useEffect(() => {
    setColor(random)
  },[random])
  const updateColor = (e) => {
    setColor(e.target.value);
  };
  const copyColor = () => {
    navigator.clipboard.writeText(color);
  };
const randomHex = () => {
    let hex = Math.floor(Math.random()*16777215).toString(16)
    return `#${hex}`
}
const backgroundStyle = {
    backgroundColor: color
}
  return (
    <div className="colorWindow__wrap">
      <div className="inputContainer">
        <input type="color" onChange={updateColor} className="colorWindow__input"></input>
        <button className="colorWindow__randomBtn" onClick={(e) => {
              e.preventDefault()
              setColor(randomHex)
          }}>Random Color</button>
      </div>
      <div className="colorWindow__container" onClick={copyColor} style={backgroundStyle}>
        <p className="colorWindow__text">Copy to clipboard</p>
      </div>
    </div>
  );
};

export default ColorWindow;
