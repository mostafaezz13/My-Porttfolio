import './about.css'
import ImageMe from "../../assets/me-about.png"
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <div>
      <section className='about' id='about'>
        <div className="top-section">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>
        <div className="container about-container">
          <div className="about-me">
            <div className="about-me-img">
              <img src={ImageMe} alt="About Me" />
            </div>
          </div>
          <div className="about-content">
            <div className="about-cards">
              <div className="about-card">
                {/* <FaAward className='about-icon' /> */}
                <h5>Experiences</h5>
                <small>3+ Years Working</small>
              </div>
              <div className="about-card">
                {/* <FiUsers className='about-icon' /> */}
                <h5>Clients</h5>
                <small>100+ Worldwide</small>
              </div>
              <div className="about-card">
                {/* <VscFolderLibrary className='about-icon' /> */}
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </div>
            </div>
            <p>I'm a passionate developer with a knack for creating stunning web applications.</p>
            <a href="#contact" className='btn btn-primary'>Let's Connect</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
