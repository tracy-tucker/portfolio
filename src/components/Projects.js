import React from "react"
import Project from "./Project"

const Projects = ({ projects }) => {
  return (
    <div className="grey">
      <div className="section-center projects-center">
        {projects.map(project => {
          return <Project key={project.id} {...project} />
        })}
      </div>
    </div>
  )
}

export default Projects
