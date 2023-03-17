import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

function App() {
  return (
    <div>
      <Router>
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Project />} /> */}

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
