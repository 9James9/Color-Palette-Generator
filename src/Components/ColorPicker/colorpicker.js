import React, {useState, useEffect} from "react";
import "./colorpicker.css";
import ColorWindow from "./ColorWindow/colorwindow";
const ColorPicker = () => {
  const [color, setColor] = useState(false)
  useEffect(() => {
    randomColors()
  },[])
  const randomHex = () => {
    let hex = Math.floor(Math.random()*16777215).toString(16)
    return `#${hex}`
}
  const randomColors = () => {
    setColor(randomHex())
  }
  return (
    <div className="container">
      <div className="randomBtn__container">
      <button className="randomBtn" onClick={() => randomColors()}>Random</button>
      </div>

          <div className="colorDisplay">
              <ColorWindow
                random={color ? randomHex() : false}/>
              <ColorWindow
              random={color ? randomHex() : false}/>
              
              <ColorWindow
              random={color ? randomHex() : false}/>
          </div>

      </div>
  );
};

export default ColorPicker;
