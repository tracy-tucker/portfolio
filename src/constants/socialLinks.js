import React from 'react'
import {
    FaTwitterSquare,
    FaMedium,
    FaGithubSquare,
    FaLinkedin,
} from 'react-icons/fa'

const socialLinks = ({styleClass}) => {
  return (
    <ul className={styleClass}>
        <li>
            <a href="https://www.linkedin.com/in/tracy-tucker/">
                <FaLinkedin className='social-icon'></FaLinkedin>
            </a>
        </li>
        <li>
            <a href="https://medium.com/@tracy-tucker">
                <FaMedium className='social-icon'></FaMedium>
            </a>
        </li>
        <li>
            <a href="https://github.com/tracy-tucker">
                <FaGithubSquare className='social-icon'></FaGithubSquare>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/mapTracy">
                <FaTwitterSquare className='social-icon'></FaTwitterSquare>
            </a>
        </li>
    </ul>
  )
}

export default socialLinks
