import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
  } = data

  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={projects} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProject(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        image {
          gatsbyImageData
        }
        sourceCode
        description {
          description
        }
        content {
          id
          stack
          tags
        }
        gitHub
      }
    }
  }
`

export default Home

// Make data request on this page
