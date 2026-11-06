import React from 'react'

function Projects() {
  return (
    <>
      <section className="projects">
        <div className="container">
          <h2 className="text-center">My Projects</h2>
          <h4 className="text-center">What I've Built</h4>
          <div className="row g-4">
          <div className="col-lg-6 col-md-6">
            <div className="card project-card">
              <div className="card-body">
                <i className="bi bi-lightning-charge-fill"></i>
                <h3 className='card-title'>Enhanced Shunt Capacitor-Commutated Converter for HVDC Systems</h3>
                <p><strong>Technology:</strong> MATLAB/Simulink</p>
                <p><strong>Domain:</strong> Power Systems & HVDC</p>
                <p><strong>Description:</strong> A project focused on mitigating commutation failure and reducing transformer noise in HVDC systems.</p>
                <p>
                  <strong>My Contribution:</strong> Worked on hardware
                  connections, component interfacing, and sensor connections
                  for the prototype.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="card project-card">
              <div className="card-body">
                <i className="bi bi-speedometer2"></i>            
                <h3 className="card-title">
                  DC Motor Control and Fault Analysis using Power BI
                </h3>
                <p><strong>Technology:</strong> ESP8266, Arduino, Blynk, Power BI</p>
                <p><strong>Domain:</strong> Embedded Systems & Motor Monitoring</p>
                <p>
                  <strong>Description:</strong> A project focused on monitoring
                  DC motor performance and detecting faults using sensors
                  and a Power BI dashboard.
                </p>
                <p>
                  <strong>My Contribution:</strong> Worked on hardware
                  connections, sensor interfacing, and integration of
                  monitoring components.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="card project-card">
              <div className="card-body">            
                <i className="bi bi-bag-heart-fill"></i>
                <h3 className="card-title">
                  VELORA - Leather E-commerce Website
                </h3>
                <p><strong>Category:</strong> IT & Full Stack</p>
                <p><strong>Technology:</strong> React, JavaScript, Bootstrap</p>
                <p><strong>Domain:</strong> E-commerce Web Development</p>
                <p>
                  <strong>Description:</strong> Developed a responsive
                  e-commerce website for leather products with product
                  categories, search, shopping cart, favorites and profile
                  features.
                </p>
                <p>
                  <strong>My Contribution:</strong> Designed and developed
                  the frontend, implemented React routing, product filtering,
                  cart and favorites functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="card project-card">
              <div className="card-body">            
                <i className="bi bi-mortarboard-fill"></i>
                <h3 className="card-title">
                  SkillTrack - Learning Dashboard
                </h3>
                <p><strong>Category:</strong> IT & Full Stack</p>
                <p><strong>Technology:</strong> React, JavaScript, Bootstrap</p>
                <p><strong>Domain:</strong> Learning Management Dashboard</p>
                <p>
                  <strong>Description:</strong> Developed a learning dashboard
                  to organize and track learning progress across IT,
                  Core EEE, interview preparation and technical skills.
                </p>
                <p>
                  <strong>My Contribution:</strong> Designed and developed
                  the frontend, created learning categories and implemented
                  progress tracking features.
                </p>
                <a
                  href="https://github.com/jayasri2903"
                  target="_blank"
                  rel="noreferrer"
                  className="btn project-btn"
                >
                  <i className="bi bi-github"></i> View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Projects