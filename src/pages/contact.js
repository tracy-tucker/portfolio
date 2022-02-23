import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Info from '../components/Info'

const contact = () => {
  return (
    <Layout>
      <section className='section'>
        <div className='section-title'>
          <h1>Contact me</h1>
          <div className="underline"></div>
        </div>
        <div className="section-center about-center">
            <article className='about-img'>
                <StaticImage
                    src="../assets/tracy-tucker-in-action.png"
                    className='hero-photo about-photo'
                    width={350}
                    height={350}
                    alt="Tracy Tucker in action"
                />
            </article>
            <article className='about-info'>
                <h3>About</h3>
                {/* <div className="underline"></div> */}
                    <p>Everyone has their own story how they became a developer. For some, their journey began after years of endless workdays in a career that didn't bring fulfillment. Others may have been fortunate enough that they already knew from the get-go what they wanted to do!</p><p>For me? Mine was a mixture of both. The drive to be a developer was always there for me - I just didn't know it!</p>
                    <Link to='/about' className='btn'>read more</Link>
            </article>
        </div>      
      </section>
      <Info />
    </Layout>
  )
}

export default contact