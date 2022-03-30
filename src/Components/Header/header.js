import React from 'react'
import './header.css'
import Nav from './Nav/nav'
const Header = () => {
  return (
    <div>
        <div className='header__container'>
            <h1 className='header__title'>Color Palette Generator</h1>
            <nav className='nav__container'>
                <Nav/>
            </nav>
        </div>
    </div>
  )
}

export default Header