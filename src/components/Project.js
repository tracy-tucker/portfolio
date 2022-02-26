import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Project = project => {
  const { id, title, image, sourceCode, description, content, gitHub } = project
  const pathToImage = getImage(image)
  const desc = description.description
  const { stack, tags } = content

  return (
    <div>
      <div key={id}>
        <h3>{title}</h3>
        <GatsbyImage image={pathToImage} alt={title} />
        <a href={sourceCode} target="_blank" rel="noreferrer">
          Source Code Link
        </a>
        <p>{desc}</p>
        {stack.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
        <a href={gitHub} target="_blank" rel="noreferrer">
          GitHub Link
        </a>
      </div>
    </div>
  )
}

export default Project

// Take in projects from Projects comp
// Display passed-in data
