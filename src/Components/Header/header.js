import React from 'react'
import './header.css'
import Nav from './Nav/nav'
const Header = () => {
//   const randomHex = () => {
//     let hex = Math.floor(Math.random()*16777215).toString(16)
//     navigator.clipboard.writeText(`#${hex}`);
//     return `#${hex}`
// }
//   const styleHeader = () => {
//     return document.querySelector('.header__container').style.background = randomHex()
//   }
  return (
        <div className='header__container'>
            <h1 className='header__title'>Color Palette Generator</h1>
            <nav className='nav__container'>
                <Nav/>
            </nav>
        </div>
  )
}

export default Header