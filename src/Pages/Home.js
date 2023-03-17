import React from "react"
import AboutMe from "../Components/AboutMe"
import FirstHeader from "../Components/FirstHeader"
import Footer from "../Components/Footer"
import Navigation from "../Components/Navigation"
import Contact from "./Contact"
import Project from "./Project"

const Home = () => {
  return (
    <>
      <Navigation />
      <FirstHeader />
      <AboutMe />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
