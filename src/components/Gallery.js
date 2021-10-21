import React from 'react'
import { images } from '../import'



const Gallery = () => {

  return (
    <section id='gallery' className='my-5'>
      <div className='container'>
        <h1 className='text-center text-uppercase heading_title'>
          <span style={{ borderBottom: '4px solid yellow' }}>Gallery</span>
        </h1>
      </div>
      <div className='container mt-5'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
          {images.map((x) => (
            <div className='col my-2'>
              <img
                src={x.original}
                className='img-fluid shadow-lg'
                alt={x.original}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
