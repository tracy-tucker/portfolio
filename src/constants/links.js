import React from 'react'
import { Link } from 'gatsby'

const links = ({styleClass}) => {
  return (
    <ul className={styleClass}>
        <li>
            <Link to="/" className='page-link'>
                Home
            </Link>
            <Link to="/about" className='page-link'>
                About
            </Link>
            <Link to="/projects" className='page-link'>
                Projects
            </Link>
            <Link to="/contact" className='page-link'>
                Contact
            </Link>
        </li>
    </ul>
  )
}

export default links
