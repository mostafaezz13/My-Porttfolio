import React from 'react'
import Home from './components/home/Home.jsx'
// import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Services from './components/services/Services.jsx'
import Projects from './components/projects/Projects.jsx'
// import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
function App() {
  return (
    <>
      <Home />
      {/* <Nav /> */}
      <About />
      <Skills />
      <Services />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </>
  )
}

export default App
