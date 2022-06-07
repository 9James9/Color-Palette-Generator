import React from 'react'
import './nav.css'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
    const navigate = useNavigate()
  return (
    <div className='nav__container'>
        <ul className='nav__items--container'>
            <li onClick={() => navigate('/about')}>About</li>
            <li onClick={() => navigate('/')}>Color picker</li>
            <li onClick={() => navigate('/saved')}>Saved Colors - in progress</li>
        </ul>
    </div>
  )
}

export default Nav