import React from 'react'
import Layout from '../components/Layout'
import Info from '../components/Info'

const contact = () => {
  return (
    <Layout>
      <section className='section single-page'>
        <div className='section-title'>
          <h1>Contact me</h1>
          <div className="underline"></div>
          <h4>Reaching out is just a click away</h4>
        </div>
        <div className="section-center">
          <p>Whether you have a question or just want to say hello, my inbox is always open. I'll reply back to you as soon as I am able.</p>
          <p>Or, feel free to grab my resume instead!</p>
        </div>
        <Info />
      </section>
    </Layout>
  )
}

export default contact