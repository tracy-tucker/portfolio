import React from 'react'
import {
    FaTwitterSquare,
    FaMedium,
    FaGithubSquare,
    FaLinkedin,
} from 'react-icons/fa'

const socialLinks = () => {
  return (
    <ul>
        <li>
            <a href="https://www.linkedin.com/in/tracy-tucker/">
                <FaLinkedin className='social-icon linkedin-icon'></FaLinkedin>
            </a>
        </li>
        <li>
            <a href="https://medium.com/@tracy-tucker">
                <FaMedium className='social-icon medium-icon'></FaMedium>
            </a>
        </li>
        <li>
            <a href="https://github.com/tracy-tucker">
                <FaGithubSquare className='social-icon github-icon'></FaGithubSquare>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/mapTracy">
                <FaTwitterSquare className='social-icon twitter-icon'></FaTwitterSquare>
            </a>
        </li>
    </ul>
  )
}

export default socialLinks

// add styleClass as destructured prop
// add styleClass to ul