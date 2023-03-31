import React, {useState} from "react"
import axios from "axios"

const Contact = () => {
  //HANDLING OF EVENT
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  // FORM SUBMIT
  const formSubmit = (e) => {
    e.preventDefault()

    let data = {
      name: name,
      email: email,
      message: message,
    }
    axios
      .post("http://127.0.0.1:3001/api/form", data)
      .then((res) => {
        setSent(!false)
        resetForm()
        alert("Thank you for contacting me")
      })
      .catch(() => {
        // alert("Message not sent")
        console.log("Message not sent")
      })
  }

  // useEffect(() => {
  //   formSubmit()
  // }, [formSubmit])

  // FORM RESET
  const resetForm = () => {
    setEmail("")
    setMessage("")
    setName("")
  }

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
                <form onSubmit={formSubmit} className="contact-form">
                  <input type="hidden" name="form-name" value="form 1" />
                  <div className="contact-form-field">
                    <label className="contact-form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      required
                      placeholder="Enter Your Name"
                      type="text"
                      className="contact-form-input"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="contact-form-field">
                    <label className="contact-form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      required
                      placeholder="Enter Your Email"
                      type="email"
                      className="contact-form-input"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="contact-form-field">
                    <label className="contact-form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      required
                      cols="20"
                      rows="5"
                      placeholder="Enter Your Message"
                      className="contact-form-input"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
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
