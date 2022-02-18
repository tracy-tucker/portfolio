import { Link } from 'gatsby'
import React from 'react'
import profile from '../assets/tracy-tucker-profile.jpg'

const Hero = () => {
  return (
    <section className='hero-comp'>
        <div className="section-center hero-center">
            <article className='hero-info'>
              <div className="underline"></div>
              <h1>I'm Tracy</h1>
              <h4>My entire career in one sentence</h4>
              <Link to="/contact" className='btn hero-btn'>Contact Me</Link>            </article>
            <article className='hero-img'>
              <img src={profile} className='hero-photo' alt="Tracy Tucker" />
            </article>
        </div>
    </section>
  )
}

export default Hero