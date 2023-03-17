import React from "react"
import {Link} from "react-router-dom"
import mypics from "../Assets/Images/mypics.jpg"

const AboutMe = () => {
  return (
    <>
      <section className="about-me about-container" id="About">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="about">ABOUT ME</h2>
              <p className="about1">
                Here you will find more information about me, what I do, and my
                current skills mostly in terms of programming and technology
              </p>
            </div>
            <div className="about-content">
              <div className="about-main">
                <img src={mypics} alt="mypics" className="mypics" />
                <div className="about-details">
                  <p className="about-details-para">
                    I'm a <strong>Frontend Web Developer</strong> building the
                    Front-end of Websites and Web Applications that leads to the
                    success of the overall product. Check out some of my work in
                    the <strong>Projects</strong> section.
                  </p>
                  {/* <br /> */}
                  <p className="about-details-para-1">
                    I also like sharing content related to the stuff that I have
                    learned over the years in <strong>Web Development</strong>{" "}
                    so it can help other people of the Dev Community Feel free
                    to Connect or Follow me on my <a>Linkedin</a> where I post
                    useful content related to Web Development and Programming.
                  </p>
                  {/* <br /> */}
                  <p className="about-details-para-2">
                    I'm open to <strong>Job</strong> opportunities where I can
                    contribute, learn and grow. If you have a good opportunity
                    that matches my skills and experience then don't hesitate to{" "}
                    <strong>CONTACT</strong> me.
                  </p>
                </div>
                <Link to="/contact" className="btn-contact">
                  Contact
                </Link>
              </div>
              <div className="about-skills">
                <h3 className="about-content-title">My Skills</h3>
                <div className="skills">
                  <div className="skills-skill">HTML</div>
                  <div className="skills-skill">CSS</div>
                  <div className="skills-skill">JavaScript</div>
                  <div className="skills-skill">GIT</div>
                  <div className="skills-skill">MongoDB</div>
                  <div className="skills-skill">NodeJS</div>
                  <div className="skills-skill">React</div>
                  <div className="skills-skill">Redux</div>
                  <div className="skills-skill">Express</div>
                  <div className="skills-skill">Github</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe
