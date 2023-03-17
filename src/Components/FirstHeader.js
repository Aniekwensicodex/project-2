import React from "react"

const FirstHeader = () => {
  return (
    <header className="masthead" id="home">
      <div className="container  d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center row">
          <div className="col-md-12 col-sm-12 col-auto text-center first-head">
            <p className="para">
              HEY, I'M ANIEKWENSI<span className="para-1"> CHISOM</span>
            </p>
            <h2 className="black-text">
              A focused Web Developer building the Frontend and of Websites and
              Web Applications that leads to the success of the overall product
            </h2>
            <div className="button">
              <a href="#Project" className="pro">
                PROJECTS
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default FirstHeader
