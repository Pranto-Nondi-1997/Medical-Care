import React from 'react'

import AboutImage from '../images/about-img-03.jpg'

const AboutUs = () => {
  return (
    <section id='about' className='my-5'>
      <div className='container'>
        <h1 className='text-center text-uppercase heading_title'>
          <span style={{ borderBottom: '4px solid yellow' }}>About Us</span>
        </h1>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-8 col-12'>
            <h1 className='text-md-start'>Our Mission</h1>
            <div className='d-flex justify-content-start flex-column'>
              <h2>
                Praava exists to provide a better patient experience. We are a
                one-stop-shop for your health, offering caring doctors,
                world-class diagnostics and much more.
              </h2>
              <br />
              <p>
                We believe that everyone should have access to convenient,
                affordable, and high-quality care.
              </p>
              <br />
              <p>
                We are on a mission to change how healthcare is delivered in
                Bangladesh. We know how daunting getting access to the right
                care can be which is why we focus on turning a doctor visit into
                a delightful experience.
              </p>
              <p>
                Our goal is to make the process intuitive for our patients and
                provide care where ever you are – in clinic or at-home.
              </p>
              <br />
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <img src={AboutImage} alt='aboutImage' classNam='img-fluid' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
