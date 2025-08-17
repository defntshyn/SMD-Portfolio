import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './NavigationStyle.css'
import { BiHomeAlt2, BiUser, BiFolder, BiMessage } from "react-icons/bi"
import 'animate.css';

const Navigation = () => {
    return (
        <div className='navigation-bar'>
            <div className="links">
                <NavLink to='/'>
                    <BiHomeAlt2 />
                    <span>Home</span>
                </NavLink>
                <NavLink to='/about'>
                    <BiUser />
                    <span>About</span>
                </NavLink>
                <NavLink to='/works'>
                    <BiFolder />
                    <span>Works</span>
                </NavLink>
            </div>
            <div className="links">
                <NavLink to='/contact' className='contact'>
                    <BiMessage />
                    <span>Contact</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Navigation