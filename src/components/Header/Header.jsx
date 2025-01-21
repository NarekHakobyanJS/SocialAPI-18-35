import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='logo-block'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSuIWGSSdkWl6S-dJnDCKQMTuty3MvhbrJw&s" />
            </div>
            <nav>
                <ul className='navlink'>
                    <li><NavLink to='/'>Home Page</NavLink></li>
                    <li><NavLink to='/users'>Users Page</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header