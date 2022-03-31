import React, { useState, useEffect } from "react";
import "./colorwindow.css";
const ColorWindow = () => {
  const [color, setColor] = useState("#696969");
  const updateColor = (e) => {
    setColor(e.target.value);
  };
  const copyColor = () => {
    navigator.clipboard.writeText(color);
  };
  useEffect(() => {
    document.querySelector(".colorWindow__container").style.backgroundColor =
      color;
  }, [color]);
  return (
    <div>
      <div className="inputContainer">
        <h4>Select a color:</h4>
        <input type="color" onChange={updateColor}></input>
      </div>
      <div className="colorWindow__container" onClick={copyColor}>
        <p className="colorWindow__text">Copy to clipboard</p>
      </div>
    </div>
  );
};

export default ColorWindow;
