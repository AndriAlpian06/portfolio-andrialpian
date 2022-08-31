import React, { Fragment, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom"

import '../css/Navbar.css'

const Navbar = () => {

    // setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // change nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    // close menu on click
    const closeMenu = () => setClick(false)



  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <nav className='navbar'>
            <Link to='/' className='logo font-bold text-lg text-primary block py-6'>
                andrialpian
            </Link>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#0f172a'}} />)
                    : (<FaBars size={30} style={{ color: '#0f172a'}}/>)}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <Link to="/" onClick={closeMenu}>Beranda</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' onClick={closeMenu}>Tentang Saya</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/our_program' onClick={closeMenu}>Portfolio</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/our_program' onClick={closeMenu}>Kontak</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar