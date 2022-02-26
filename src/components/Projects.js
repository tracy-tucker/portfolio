import React from "react"
import Project from "./Project"

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.map(project => {
        return <Project key={project.id} {...project} />
      })}
    </div>
  )
}

export default Projects

// Take in posts data, map and pass along to Post
