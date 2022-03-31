import React, {useState, useEffect} from 'react'
import "./colorwindow.css"
const ColorWindow = () => {
    const [color, setColor] = useState('#fff')
    const updateColor = e => {
        setColor(e.target.value)
    }
    const copyColor = () => {
        
    }
    useEffect(() => {
        document.querySelector('.colorWindow__container').style.backgroundColor = color
    },[color])
  return (
    <div>
        <div className='colorWindow__container'>
            <p className='colorWindow__text'>hello world</p>
        </div>
        <div className='inputContainer'>
            <h4>Select a color:</h4>
            <input type="color" onChange={updateColor}></input>
        </div>
    </div>
  )
}

export default ColorWindow