import './about.css'
import ImageMe from "../../assets/me-about.png"
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
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
            <div className="about-me-img" data-aos="flip-left">
              <img src={ImageMe} alt="About Me"  data-aos="flip-left" />
            </div>
          </div>
          <div className="about-content">
            <div className="about-cards">
              <div className="about-card" data-aos="zoom-out">
                <FaAward className='about-icon' />
                <h5>Experiences</h5>
                <small>3+ Years Working</small>
              </div>
              <div className="about-card" data-aos="zoom-out">
                <FiUsers className='about-icon' />
                <h5>Clients</h5>
                <small>100+ Worldwide</small>
              </div>
              <div className="about-card" data-aos="zoom-out">
                <VscFolderLibrary className='about-icon' />
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </div>
            </div>
            <p data-aos="flip-up">I'm a passionate developer with a knack for creating stunning web applications.</p>
            <a  href="#contact" className='btn btn-primary' data-aos="fade-up">Let's Connect</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
