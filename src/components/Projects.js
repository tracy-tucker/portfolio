import React from "react"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ projects, showTitle, showMore }) => {
  return (
    <>
      <div className="section-center width-auto">
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
        {showMore && (
          <Link to="/projects" className="btn">
            all projects
          </Link>
        )}
      </div>
    </>
  )
}

export default Projects
