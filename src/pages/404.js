import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const ErrorPage = () => {
    return (
        <Layout>
          <section className='single-page'>
            <div className="page-center">
                <h1>ERROR</h1>
              <h3>Oops! Something went wrong...</h3>
              <p>Don't worry, there is a way back to the home page.</p>
              <Link to='/' className='btn'>Home</Link>
            </div>
          </section>
        </Layout>
      )
}

export default ErrorPage