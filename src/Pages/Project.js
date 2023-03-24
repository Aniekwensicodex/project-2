import React from "react"
import macbook from "../Assets/Images/macbook.jpeg"
import {Link} from "react-router-dom"

const Project = () => {
  return (
    <>
      <section className="main-projects" id="Project">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="project">PROJECTS</h2>
            <p className="project1">
              Here you will find some of the personal and clients projects that
              I have created and helped them grow
            </p>
            <div className="project-content">
              <div className="project-row">
                <div className="img-content">
                  <img src={macbook} alt="macbook" className="row-img" />
                </div>
                <div className="row-content">
                  <h3 className="row-content-title">Dopefolio</h3>
                  <p className="project-p">
                    Dopefolio is a successful Open-Source project that I created
                    which have been featured on some of the biggest tech sites
                    like CSS-Tricks, Hotinger, etc & used by thousands of
                    developers globally
                  </p>
                  <Link to="/project-1" className="btn-project">
                    Case Study
                  </Link>
                </div>
              </div>

              <div className="project-row">
                <div className="img-content">
                  <img src={macbook} alt="macbook" className="row-img" />
                </div>

                <div className="row-content-1">
                  <h3 className="row-content-title">Wilsonport</h3>

                  <p className="project-p">
                    Wilsonport is a successful Open-Source project that I
                    created which have been featured on some of the biggest tech
                    sites like CSS-Tricks, Hotinger, etc & used by thousands of
                    developers globally
                  </p>

                  <Link to="/project-1" className="btn-project">
                    Case Study
                  </Link>
                </div>
              </div>

              <div className="project-row">
                <div className="img-content">
                  <img src={macbook} alt="macbook" className="row-img" />
                </div>

                <div className="row-content-2">
                  <h3 className="row-content-title">Boreal Coffee</h3>

                  <p className="project-p">
                    Boreal Coffee is a successful Open-Source project that I
                    created which have been featured on some of the biggest tech
                    sites like CSS-Tricks, Hotinger, etc & used by thousands of
                    developers globally
                  </p>

                  <Link to="/project-1" className="btn-project">
                    Case Study
                  </Link>
                </div>
              </div>

              <div className="project-row">
                <div className="img-content">
                  <img src={macbook} alt="macbook" className="row-img" />
                </div>

                <div className="row-content-3">
                  <h3 className="row-content-title">Cup-Cafe</h3>

                  <p className="project-p">
                    Cup-Cafe is a successful Open-Source project that I created
                    which have been featured on some of the biggest tech sites
                    like CSS-Tricks, Hotinger, etc & used by thousands of
                    developers globally
                  </p>

                  <Link to="/project-1" className="btn-project">
                    Case Study
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
