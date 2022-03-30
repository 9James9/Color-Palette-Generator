import React, { useState } from 'react'
import './App.css'
import ColorGenerator from './Components/ColorGenerator/colorgenerator'
import ColorPicker from './Components/ColorPicker/colorpicker'
import Header from './Components/Header/header'
function App() {

  return (
    <div className="app__container">
      <Header/>
<ColorPicker/>
    </div>
  )
}

export default App