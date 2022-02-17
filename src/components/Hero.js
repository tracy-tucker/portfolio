import React from 'react'
import SocialLinks from '../constants/socialLinks'

const Hero = () => {
  return (
    <section className='hero-comp'>
        <div className="section-center hero-center">
            <article>
              <h1>I'm Tracy</h1>
              <h4>My entire career in one sentence</h4>
              <SocialLinks />
            </article>
            <article>
              image goes here
            </article>
        </div>
    </section>
  )
}

export default Hero