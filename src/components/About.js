import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
  return (
    <section className='section'>
        <div className="section-center about-center">
            <article className='about-img'>
                <StaticImage
                    src="../assets/tracy-tucker-in-action.jpg"
                    className='hero-photo about-photo'
                    width={350}
                    height={350}
                    alt="Tracy Tucker in action"
                />
            </article>
            <article className='about-info'>
                <h2>About</h2>
                <div className="underline"></div>
                    <p>Brooklyn farm-to-table raclette bespoke yr celiac roof party vexillologist butcher ramps. Tote bag iceland heirloom retro coloring book lyft. Stumptown crucifix neutra unicorn schlitz marfa waistcoat kitsch. Messenger bag tbh cloud bread portland williamsburg crucifix cray austin snackwave tacos forage dreamcatcher street art. Tote bag humblebrag celiac flannel actually PBR&B twee air plant trust fund meggings enamel pin. Cliche green juice deep v, ethical health goth sustainable 8-bit semiotics salvia.</p>
                    <Link to='/about' className='btn'>read more</Link>
            </article>
        </div>
    </section>
  )
}

export default About