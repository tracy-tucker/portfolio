import { Link } from 'gatsby'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  return (
    <section className='hero-comp'>
        <div className="section-center hero-center">
            <article className='hero-info'>
              <div className="underline"></div>
              <h1>I'm Tracy</h1>
              <h4>Experienced Frontend Developer</h4>
              <Link to="/contact" className='btn hero-btn'>Contact Me</Link>            </article>
            <article className='hero-img'>
              <StaticImage
                src="../assets/tracy-tucker-profile.jpg"
                placeholder='blurred'
                width={300}
                height={300}
                className='hero-photo'
                alt="Tracy Tucker" 
              />
            </article>
        </div>
    </section>
  )
}

export default Hero

// install gatsby image plugin