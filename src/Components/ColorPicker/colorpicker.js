import React, {useState} from "react";
import "./colorpicker.css";
import ColorWindow from "./ColorWindow/colorwindow";
const ColorPicker = () => {
  const [color, setColor] = useState(false)
  const randomHex = () => {
    let hex = Math.floor(Math.random()*16777215).toString(16)
    return `#${hex}`
}
  const randomColors = () => {
    setColor(randomHex())
  }
  return (
    <div className="container">
      <button onClick={() => randomColors()}>Click me</button>
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
