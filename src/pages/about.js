import React from 'react'
import Layout from '../components/Layout'

const about = () => {
  return (
    <Layout>
      <section className='section single-page about-page'>
        <div className="section-title">
          <h1>About Me</h1>
          <div className="underline"></div>
        </div>
        <div className="section-center about-page-center">
          <div><h2>My Story</h2></div>
          <article className='about-page-item'>
            <h3>How I Started</h3>
            <p>I started out as a digital marketer who became addicted to building things with code. I first became enthralled with the concept in 2011. At the time, I was living in the mountains and pushing hard on digital marketing ideas for a fitness company. I had outsourced a website project and was not happy with the outcomes or the amount of time it would take to implement tweaks to the layout.</p>
            <p>I started inspecting the code and attempting to make changes myself. Needless to say, I broke a lot of functionality along the way.</p>
            <span className='number'>0</span>
          </article>
          <article className='about-page-item'>
            <h3>Baby Steps</h3>
            <p>But I got better! This led to me diving into the little things, such as developing marketing emails with HTML tables with in-line CSS. This quickly grew into me dabbling with WordPress and working with listless plugins.</p>
            <p>My progression continued after moving south, as I started spear-heading website projects on a CMS platform for a fast-growing automotive company. I had come far from where I started, but still felt the need to learn more.</p>
            <span className='number'>1</span>
          </article>
          <article className='about-page-item'>
            <h3>Breakthrough</h3>
            <p>While working within the constraints of a CMS, I convinced a Ford Motor Company developer to give me additional access so that I could start coding beyond the constraints of the CMS platform. Within a testing environment, I started breaking things left and right - and that was okay! I was learning! And enjoying every minute of it.</p>
            <p>This same developer shared online resources with me so that I could dive into a world of coding outside of CMS constraints.</p>
            <span className='number'>2</span>
          </article>
          <article className='about-page-item'>
            <h3>Continued Education</h3>
            <p>I soon found myself working through many online resources, including FreeCodeCamp, Linda and more. Before I knew it, I was coding when I woke up, as soon as I got home from work and through all my weekends. This led to me moving on to more challenging positions and continuing working on side projects to keep progressing.</p>
            <p>After years of coding on my own, I finally signed up for the FlatIron Fullstack Developer program to expand my learning into a more structured environment.</p>
            <span className='number'>3</span>
          </article>
          <article className='about-page-item'>
            <h3>Today and Beyond</h3>
            <p>I am still addicted to code in each and every way. As a developer, I firmly believe that one should never stop learning, and I put this belief into practice daily. I am currently working on a few different projects utilizing different stacks to keep my skills sharp in an ever-changing industry, and to continue "leveling up"! I have no desire throw in the towel. I need to add information about Houston React Developers meetup.</p>
            <span className='number'>4</span>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default about