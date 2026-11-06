import React from 'react'

function About() {
  return (
    <>
      <section className='about'>
        <div className='container'>
          <h2 className='text-center'>About Me</h2>
          <h4 className='text-center'>Get to know me better</h4>
          <div className='row'>
            <div className='col-lg-6'>
               <h3>A Little About Myself</h3>
               <p>
                I'm an Electrical and Electronics Engineering graduate
                passionate about technology, software development and
                problem-solving.
              </p>
                
              <p>
                I have hands-on experience with frontend technologies
                like HTML, CSS, JavaScript and React, along with
                foundational knowledge of Java and Core Electrical
                Engineering concepts.
              </p>
                
              <p>
                I enjoy learning new technologies and building practical
                projects that help me grow as a developer.
              </p>
            </div>
            <div className='col-lg-6'>
              <h3>Education & Learning</h3>
              <div className='card'>
                <div className='card-body'>
                  <i className="bi bi-mortarboard-fill"></i>
                  <h4 className='card-title'>Education</h4>
                  <p className='card-text'>B.E. Electrical & Electronics Engineering.</p>
                </div>
              </div>
              <div className='card'>
                <div className='card-body'>
                  <i className="bi bi-code-slash"></i>
                  <h4 className='card-title'>Full Stack Development</h4>
                  <p className='card-text'>JavaScript, Java, Spring Boot, React</p>
                </div>
              </div>
              <div className='card'>
                <div className='card-body'>
                  <i className="bi bi-lightbulb-fill"></i>
                  <h4 className='card-title'>Technical Interests</h4>
                  <p className='card-text'>Web Development & Electrical Engineering.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="technical-journey">
            <h3 className="text-center">My Technical Journey</h3>
            <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card skill-card">
                <div className="card-body">
                    <i className="bi bi-code-slash"></i>
                    <h4 className="card-title">Frontend Development</h4>
                    <p className="card-text">
                        HTML, CSS, JavaScript, React
                    </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card skill-card">
                  <div className="card-body">
                      <i className="bi bi-cup-hot-fill"></i>
                      <h4 className="card-title">Java Development</h4>
                      <p className="card-text">
                          Core Java, OOP, Java Fundamentals
                      </p>
                  </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card skill-card">
                  <div className="card-body">
                      <i className="bi bi-lightning-charge-fill"></i>
                      <h4 className="card-title">Electrical Engineering</h4>
                      <p className="card-text">
                          Electrical Machines, Power Systems, Basic Electrical Concepts
                      </p>
                  </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card skill-card">
                  <div className="card-body">
                      <i className="bi bi-tools"></i>
                      <h4 className="card-title">Design & Tools</h4>
                      <p className="card-text">
                          AutoCAD, AutoCAD Electrical, Revit MEP
                      </p>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
