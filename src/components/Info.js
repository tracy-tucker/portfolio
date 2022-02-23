import React from 'react'
import { MdEmail } from 'react-icons/md'

const Info = () => {
  return (
    <div className='section'>
      <div className='section-center info-center'>
        <article className='info-content'>
          <div>
          <MdEmail className='info-icon'/> <span>EMAIL</span>
          </div>
          <div>
          <MdEmail className='info-icon'/> <span>EMAIL</span>
          </div>
        </article>
        </div>
    </div>
  )
}

export default Info