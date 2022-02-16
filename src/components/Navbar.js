import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/coder-news-logo.svg'
import Links from '../constants/links'

const Navbar = ({toggle}) => {
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
            <Links styleClass='nav-links' />
        </div>
    </nav>
  )
}

export default Navbar

// Add links and styleClass
// Replace logo