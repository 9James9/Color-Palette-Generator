import React from "react";
import "./colorpicker.css";
import ColorWindow from "./ColorWindow/colorwindow";
const ColorPicker = () => {

  return (
    <div className="container">

          <div className="colorDisplay">
              <ColorWindow/>
              <ColorWindow/>
              <ColorWindow/>
          </div>

      </div>
  );
};

export default ColorPicker;
