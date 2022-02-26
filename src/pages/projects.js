import React from "react"
import AllProjects from "../components/AllProjects"
import Layout from "../components/Layout"

const projects = () => {
  return (
    <Layout>
      <section className="section height">
        <div className="section-title">
          <h1>Projects</h1>
          <div className="underline"></div>
          <div className="section-center about-center">
            here are the projects
            <AllProjects />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default projects

// Make data request on this page
// Pass over to Projects
