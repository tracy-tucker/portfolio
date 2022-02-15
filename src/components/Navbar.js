import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/coder-news-logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="nav-center">
            <div className="nav-header">
                <Link to='/' className='nav-logo'>
                    <img src={logo} alt="Tracy Tucker name" />
                </Link>
                <button className='toggle-btn'>
                    <FaBars />
                </button>
            </div>
            Add Links here
        </div>
    </nav>
  )
}

export default Navbar

// Set up toggle function