import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">

          <h3>JAYASRI S</h3>
          <p>EEE Graduate | Aspiring Full Stack Developer</p>
          <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-social">
              <a href="https://linkedin.com/in/jayasri-s-a21a5025b" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            
              <a href="https://github.com/jayasri2903" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>
            <div className="footer-bottom">
              <p>© 2026 Jayasri S. All Rights Reserved.</p>
              <p>Designed & Developed by Jayasri S</p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer