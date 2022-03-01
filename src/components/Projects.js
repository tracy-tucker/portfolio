import React from "react"
import Project from "./Project"

const Projects = ({ projects, showTitle }) => {
  return (
    <div className="grey">
      <div className="section-center">
        {showTitle && (
          <div>
            <h2>Featured Projects</h2>
            <div className="underline"></div>
          </div>
        )}
        <div className="projects-center">
          {projects.map(project => {
            return <Project key={project.id} {...project} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
