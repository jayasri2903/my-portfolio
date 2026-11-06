
import React from 'react'
import './Style.css'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <section className="header">
      <Navbar expand="lg" className="header-navbar">
        <div className="container">
          <Navbar.Brand as={Link} to="/" className="logo">
            JAYASRI S
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar ms-auto">
              <Nav.Link className='links' as={Link} to="/">Home</Nav.Link>
              <Nav.Link className='links' as={Link} to="/about">About</Nav.Link>
              <Nav.Link className='links' as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link className='links' as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link className='links' as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </section>
  )
}

export default Header
