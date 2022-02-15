import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="nav-center">
            <div className="nav-header">
                <Link to='/'>
                    <img src={logo} alt="Tracy Tucker name" />
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar