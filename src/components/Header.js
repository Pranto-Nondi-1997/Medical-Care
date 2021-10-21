import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useHistory } from 'react-router'
import useAuth from './../hooks/useAuth'

const Header = () => {

  const history = useHistory()
  const { user, signOutUser } = useAuth()

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -100
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }

 
  return (
    <>
      <Navbar
        sticky='top'
        expand='lg'
        bg='dark'
        variant='dark'
        className='text-uppercase'
      >
        <Container>
          <Navbar.Brand href='#home'>
            <i className='fas fa-hospital-alt fa-2x'>
              {' '}
              <span style={{ color: 'red' }}>M</span> edi{' '}
              <span style={{ color: 'red' }}>P</span>ath
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='ms-auto my-2 my-lg-0 fontAdd'
              navbarScroll
              style={{ maxHeight: '100px' }}
            >
              <Nav.Link
                as={HashLink}
                smooth
                to='/home#home'
                scroll={(el) => scrollWithOffset(el)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                smooth
                as={HashLink}
                to='/home#about'
                scroll={(el) => scrollWithOffset(el)}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                to='/home#services'
                smooth
                scroll={(el) => scrollWithOffset(el)}
              >
                Services
              </Nav.Link>

              <Nav.Link
                as={HashLink}
                to='/home#gallery'
                smooth
                scroll={(el) => scrollWithOffset(el)}
              >
                Gallery
              </Nav.Link>
              
              <Nav.Link
                as={HashLink}
                to='/contact'
                smooth
                scroll={(el) => scrollWithOffset(el)}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                to='/faq'
                smooth
                scroll={(el) => scrollWithOffset(el)}
              >
                Faq
              </Nav.Link>
              {user?.email ? (
                <>
                  <div className='d-flex justify-content-between'>
                    <Nav.Link onClick={signOutUser}>SignOut</Nav.Link>
                    <p className='text-white'>{user.displayName || user.email}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Nav.Link onClick={() => history.push('/login')}>
                      Sign In
                    </Nav.Link>
                  </div>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Nav.Link onClick={() => history.push('/signup')}>
                      Sign Up
                    </Nav.Link>
                  </div>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
