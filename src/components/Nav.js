import React, { useState, useEffect } from 'react'
import '../styles/Nav.css'
import logo from '../images/logonetflix.png'
import { MdSearch, MdOutlineNotificationsNone } from 'react-icons/md'

function Nav() {
    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

   

    useEffect(() => {
        window.addEventListener("scroll", changeBackground) 
    })

    return (
        <div className={navbar ? "nav-active" : "nav"}>
            <div className='nav--left'>
                <img src={logo} alt="" />
                <ul className='nav--links'>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New and Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className='nav--right'>
                <MdSearch className='icons' />
                <p>Kids</p>
                <MdOutlineNotificationsNone className='icons' />
                <img
                    className="nav--avatar"
                    src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                    alt="Avatar"
                />
            </div>
        </div>
    )
}

export default Nav