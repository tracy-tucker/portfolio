import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsGithub } from "react-icons/bs"

const Project = project => {
  const { id, title, image, sourceCode, description, content, gitHub } = project
  const pathToImage = getImage(image)
  const desc = description.description
  const { stack } = content

  return (
    <article key={id} className="single-project">
      <div className="project-container">
        <GatsbyImage image={pathToImage} alt={title} />
        <a
          href={sourceCode}
          target="_blank"
          rel="noreferrer"
          className="project-icon"
        >
          @
        </a>
      </div>
      <div className="project-details">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="stack">
          {stack.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </div>
        <div className="project-footer">
          <a href={gitHub} target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
