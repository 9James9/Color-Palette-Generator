import React, { useState } from "react";
import "./colorpicker.css";
const ColorPicker = () => {
    const [color, setColor] = useState(false)
  return (
    <div>
      <div className="colorPicker">
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
              document.querySelector(".container").style.backgroundColor =
                color;
              console.log(color);
              navigator.clipboard.writeText(color);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ColorPicker;
