import React from 'react'
import { MdEmail } from 'react-icons/md'

const Info = () => {
  return (
    <div className='section'>
      <div className='section-center info-center'>
        <article className='info-content'>
          <MdEmail className='info-icon'/> <span>EMAIL</span>
        </article>
        <article className='info-content'>
          <MdEmail className='info-icon'/> <span>EMAIL</span>
        </article>
        </div>
    </div>
  )
}

export default Info