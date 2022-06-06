import React from 'react'
import './nav.css'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
    const navigate = useNavigate()
  return (
    <div className='nav__container'>
        <ul className='nav__items--container'>
            <li onClick={() => navigate('/home')}>Home</li>
            <li onClick={() => navigate('/')}>Color picker</li>
            <li onClick={() => navigate('/about')}>About</li>
        </ul>
    </div>
  )
}

export default Nav