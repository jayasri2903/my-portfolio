import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <section className="home my-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left side */}
          <div className="col-lg-7">
            <h1>Hello, I'm Jayasri</h1>
            <h2>EEE Graduate | Frontend Developer | Aspiring Java Full Stack Developer</h2>

            <p>
              I enjoy creating responsive and user-friendly websites.
              I'm passionate about learning new technologies and
              turning creative ideas into reality.
            </p>            
          <div className="d-flex gap-3 mt-4 flex-wrap">
            <Link to="/projects" className="btn project-btn">
              View My Projects
            </Link>

            <Link to="/contact" className="btn contact-btn">
              Contact Me
            </Link>
          </div>
          <div className="home-social mt-4">
          <p className="availability">
            <span className="status-dot"></span>
            Available for Opportunities
          </p>

          <div className="social-links">
            <a href="https://github.com/jayasri2903"
               target="_blank"
               rel="noreferrer">
              <i className="bi bi-github"></i>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/jayasri-s-a21a5025b"
               target="_blank"
               rel="noreferrer">
              <i className="bi bi-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
        </div>
          {/* Right side */}
         
<div className="col-lg-5 text-center mt-5 mt-lg-0">
  <div className="code-card">

    <div className="code-card-header">
      <span className="dot red"></span>
      <span className="dot yellow"></span>
      <span className="dot green"></span>
      <span className="file-name">jayasri.jsx</span>
    </div>

    <div className="code-content">
      <p><span className="code-purple">const</span> developer = {"{"}</p>

      <p className="indent">
        name: <span className="code-green">'Jayasri'</span>,
      </p>

      <p className="indent">
        role: <span className="code-green">'Frontend Developer'</span>,
      </p>

      <p className="indent">
        skills: [<span className="code-blue">'React'</span>,
        <span className="code-blue">'JavaScript'</span>],
      </p>

      <p className="indent">
        passion: <span className="code-green">'Building Websites'</span>
      </p>

      <p>{"}"}</p>

      <p className="code-message">
        <span className="code-purple">console.log</span>
        (<span className="code-green">'Hello World!'</span>);
      </p>
    </div>

  </div>
</div>


        </div>
      </div>
    </section>
  )
}

export default Home
