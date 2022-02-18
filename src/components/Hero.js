import React from 'react'
import SocialLinks from '../constants/socialLinks'
import profile from '../assets/tracy-tucker-profile.jpg'

const Hero = () => {
  return (
    <section className='hero-comp'>
        <div className="section-center hero-center">
            <article className='hero-info'>
              <div className="underline"></div>
              <h1>I'm Tracy</h1>
              <h4>My entire career in one sentence</h4>
              <SocialLinks />
            </article>
            <article className='hero-img'>
              <img src={profile} className='hero-photo' alt="Tracy Tucker" />
            </article>
        </div>
    </section>
  )
}

export default Hero