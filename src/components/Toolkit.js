import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Toolkit = () => {
  return (
    <div className="section-center about-center">
        <article className='about-img'>
            <StaticImage
                src="../assets/lets-connect.jpg"
                className='hero-photo about-photo'
                width={350}
                height={350}
                alt="Tracy Tucker in action"
            />
        </article>
        <article className='about-info'>
            <h4>IN MY TOOLBOX</h4>
            {/* <div className="underline"></div> */}
                <p>Whether you have a question or just want to say hello, my inbox is always open. I'll reply back to you as soon as I am able. I welcome all inquiries and introductions, no matter how big or small.</p><p>Just looking for the facts? Feel free to grab a copy of my resume instead!</p>
                <a href="mailto:tracytuckeremail@gmail.com" className='btn'>email</a> <Link to='/about' className='btn'>resume</Link>
        </article>
    </div>
  )
}

export default Toolkit