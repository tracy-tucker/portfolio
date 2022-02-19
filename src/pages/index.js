import React from "react"
import Layout from "../components/Layout"
import Hero from '../components/Hero'
import About from "../components/About"

export default function Home() {
  return (
    <Layout>
      I am the Index page.
      <Hero />
      <About />
    </Layout>
  )
}
