import React from "react"
import linkedin from "../Assets/Images/linkedin-ico.png"
import github from "../Assets/Images/github.svg"
import twitter from "../Assets/Images/twitter-ico.png"
import website from "../Assets/Images/website-icon.jpg"

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="d-flex justify-content-between align-items-start upper-footer">
              <div className="footer-row-1">
                <h2>ANI CHISOM</h2>
                <p className="short-p">
                  A Frontend focused Web Developer building the Frontend of
                  Websites and Web Applications that leads to the success of the
                  overall product
                </p>
              </div>

              <div className="footer-row-2">
                <h2 className="social">Social</h2>

                <div className="social-1">
                  <a href="https://www.linkedin.com/feed/">
                    <img src={linkedin} alt="linkedin" className="linkedin" />
                  </a>
                  <a href="https://github.com/Aniekwensicodex">
                    <img src={github} alt="github" className="github" />
                  </a>
                  <a href="https://twitter.com/Chisom86011532">
                    <img src={twitter} alt="twitter" className="twitter" />
                  </a>
                  <a href="https://certifiedcodex.netlify.app/">
                    <img src={website} alt="website" className="website" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lower-footer">
              © Copyright 2023. Made by
              <a href="https://certifiedcodex.netlify.app/">Ani Chisom</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
