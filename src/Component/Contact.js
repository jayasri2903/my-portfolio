import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const formRef = useRef()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setSending(true)
    setSubmitted(false)
    setError(false)

    try {
      await emailjs.sendForm(
        'service_rfwzn0i',
        'template_p1pd0ko',
        formRef.current,
        'fn_dq0KOyvfs9LUj4'
      )

      setSubmitted(true)
      event.target.reset()

    } catch (error) {
      console.log(error)
      setError(true)

    } finally {
      setSending(false)
    }
  }
  return (
    <>
      <section className="contact">
        <div className="container">
          <h2 className="text-center">Contact Me</h2>
          <h4 className="text-center">
            Let's Connect
          </h4>           
          <div className="row g-4">

            {/* Left Column */}
            <div className="col-lg-5">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>
                  Feel free to contact me for job opportunities,
                  collaborations or professional discussions.
                </p>
                <div className="contact-item">
                  <i className="bi bi-envelope-fill"></i>
                  <div>
                    <h5>Email</h5>
                    <p>jayasriramkumar200529@gmail.com</p>
                  </div>
                </div>                  
                <div className="contact-item">
                  <i className="bi bi-telephone-fill"></i>
                  <div>
                    <h5>Phone</h5>
                    <p>7904886958</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  <div>
                    <h5>Location</h5>
                    <p>Virudhunagar, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-7">
              <div className="contact-form">               
                <h3>Send Me a Message</h3>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"   name="from_name"
                      className="form-control"
                      placeholder="Enter your name" required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your Email</label>
                    <input
                      type="email"
                      className="form-control" name="from_email"
                      placeholder="Enter your email" required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control" name="subject"
                      placeholder="Enter subject" required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control" name="message"
                      rows="5"
                      placeholder="Write your message" required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn contact-submit"
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
                {submitted && (
                  <p className="text-success mt-3">
                    Message sent successfully!
                  </p>
                )}

                {error && (
                  <p className="text-danger mt-3">
                    Failed to send message. Please try again.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
