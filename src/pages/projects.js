import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
  } = data

  return (
    <Layout>
      <section className="section height">
        <div className="section-title">
          <h1>My Projects</h1>
          <div className="underline"></div>
        </div>
        <Projects projects={projects} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProject {
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

export default ProjectsPage

// Make data request on this page
// Pass over to Projects
