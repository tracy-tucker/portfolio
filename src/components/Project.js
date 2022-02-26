import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Project = project => {
  const { id, title, image, sourceCode, description, content, gitHub } = project
  const pathToImage = getImage(image)
  const desc = description.description
  const { stack } = content

  return (
    <section className="section">
      <div className="section-center projects-center">
        <article key={id} className="single-project">
          <div className="project-container">
            <GatsbyImage image={pathToImage} alt={title} />
            <a href={sourceCode} target="_blank" rel="noreferrer">
              Source Code Link
            </a>
          </div>
          <div className="project-details">
            <h4>{title}</h4>
            <p>{desc}</p>
            <div>
              {stack.map((item, index) => {
                return <p key={index}>{item}</p>
              })}
            </div>
            <div className="project-footer">
              <a href={gitHub} target="_blank" rel="noreferrer">
                GitHub Link
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Project

// Take in projects from Projects comp
// Display passed-in data
