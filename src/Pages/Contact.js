import React from "react"

const Contact = () => {
  return (
    <>
      <section className="main-contact" id="Contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="contact">CONTACT</h2>
              <p className="contact1">
                Feel free to Contact me by submitting the form below and I will
                get back to you as soon as possible
              </p>
              <div className="contact-form-container">
                <form action="#" className="contact-form" method="post">
                  <input type="hidden" name="form-name" value="form 1" />
                  <div className="contact-form-field">
                    <label className="contact-form-label" for="name">
                      Name
                    </label>
                    <input
                      required
                      placeholder="Enter Your Name"
                      type="text"
                      className="contact-form-input"
                      name="name"
                    />
                  </div>

                  <div className="contact-form-field">
                    <label className="contact-form-label" for="email">
                      Email
                    </label>
                    <input
                      required
                      placeholder="Enter Your Email"
                      type="email"
                      className="contact-form-input"
                      name="email"
                    />
                  </div>

                  <div className="contact-form-field">
                    <label className="contact-form-label" for="message">
                      Message
                    </label>
                    <textarea
                      required
                      cols="20"
                      rows="5"
                      placeholder="Enter Your Message"
                      className="contact-form-input"
                      name="message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
