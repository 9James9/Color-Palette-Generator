import React, { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState(false)
  return (
    <div className="container">
      <div className='colorPicker'>
        <form>
          <input type="color" onChange={(e) => {
            setColor(e.target.value)
          }}></input>
          <button onClick={(e) => {
            e.preventDefault()

            console.log(color)
          }}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App