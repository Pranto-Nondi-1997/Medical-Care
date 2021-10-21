import React from 'react'
import AboutUs from '../components/AboutUs'
import Gallery from '../components/Gallery'
import Services from '../components/Services'

import { bannerImg } from '../import'

const Home = () => {
  return (
    <div id='home'>
      <img
        src={bannerImg}
        className='img-fluid d-none d-md-block'
        alt='bannerImage'
        style={{ height: '700px', width: '100%' }}
      />
      <AboutUs />
      <Services />
      <Gallery />
    </div>
  )
}

export default Home
