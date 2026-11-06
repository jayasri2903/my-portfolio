import React from 'react'

function Skills() {
  return (
    <>
      <section className="skills">
        <div className="container">
          <h2 className="text-center">My Skills</h2>
          <h4 className="text-center">Technologies & Expertise</h4>
          <div className="row g-4">
            
            <div className="col-lg-6 col-md-6">
                <div className="card skill-category">
                    <div className="card-body">
                        <i className="bi bi-code-slash"></i>
                        <h4 className="card-title">Frontend Development</h4>
                        <p className="card-text">
                            HTML, CSS, Bootstrap, JavaScript, React
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="card skill-category">
                    <div className="card-body">
                        <i className="bi bi-file-code-fill"></i>
                        <h4 className="card-title">Programming Languages</h4>
                        <p className="card-text">
                            Java, C, JavaScript
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card skill-category">
              <div className="card-body">
                  <i className="bi bi-lightning-charge-fill"></i>
                  <h4 className="card-title">Core Electrical Engineering</h4>
                  <p className="card-text">
                      Electrical Machines, Power Systems, Basic Electrical Concepts
                  </p>
              </div>
          </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card skill-category">
                <div className="card-body">
                    <i className="bi bi-tools"></i>
                    <h4 className="card-title">Design & Engineering Tools</h4>
                    <p className="card-text">
                        AutoCAD, AutoCAD Electrical, Revit MEP
                    </p>
                </div>
            </div>
            </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Skills