import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
  return (
    <section className='section'>
        <div className="section-center about-center">
            <article className='about-img'>
                image goes here
            </article>
            <article className='about-info'>
                about goes here
            </article>
        </div>
    </section>
  )
}

export default About