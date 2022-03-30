import React, { useState } from 'react'
import './App.css'
import ColorGenerator from './Components/ColorGenerator/colorgenerator'
import ColorPicker from './Components/ColorPicker/colorpicker'
function App() {

  const [color, setColor] = useState(false)
  return (
    <div className="app__container">
<ColorPicker/>
    </div>
  )
}

export default App