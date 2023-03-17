import React, {useState} from "react"
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import "../Styles/styles.css"
import "../index.css"

const Navigation = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor)

  // useEffect(() => {
  //   if (typeof window !== "undefined") {

  //     window.addEventListener("scroll", () => {
  //       setScrollHeader(window.pageYOffset > 200)
  //     })
  //   }
  // }, [])

  return (
    <>
      <nav className={color ? "header header-bg" : "header"}>
        <div className="nav container-fluid px-4 px-lg-5">
          <Link to="/" className="navbar-brand">
            Logo
          </Link>

          <div className="">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-list">
                <a href="#home" className="nav-link">
                  HOME
                </a>
              </li>

              <li className="nav-list">
                <a href="#About" className="nav-link">
                  ABOUT
                </a>
              </li>

              <li className="nav-list">
                <a href="#Project" className="nav-link">
                  PROJECT
                </a>
              </li>

              <li className="nav-list">
                <a href="#Contact" className="nav-link">
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
              {click ? (
                <FaTimes size={20} style={{color: "black"}} />
              ) : (
                <FaBars size={20} style={{color: "black"}} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
