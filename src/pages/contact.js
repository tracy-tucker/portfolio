import React from 'react'
import Layout from '../components/Layout'
import Handles from '../components/Handles'

const contact = () => {
  return (
    <Layout>
      <section className='section single-page'>
        <div className='section-title'>
          <h1>Contact me</h1>
          <div className="underline"></div>
          <h4>Reaching out is just a click away</h4>
        </div>
        <p>I need to put something here to discuss getting ahold of me</p>
        <Handles />
      </section>
    </Layout>
  )
}

export default contact