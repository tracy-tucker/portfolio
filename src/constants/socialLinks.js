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
            <a href="https://www.linkedin.com/in/tracy-tucker/" target="_blank">
                <FaLinkedin className='social-icon'></FaLinkedin>
            </a>
        </li>
        <li>
            <a href="https://medium.com/@tracy-tucker" target="_blank">
                <FaMedium className='social-icon'></FaMedium>
            </a>
        </li>
        <li>
            <a href="https://github.com/tracy-tucker" target="_blank">
                <FaGithubSquare className='social-icon'></FaGithubSquare>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/mapTracy" target="_blank">
                <FaTwitterSquare className='social-icon'></FaTwitterSquare>
            </a>
        </li>
    </ul>
  )
}

export default socialLinks
