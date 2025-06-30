import './footer.css'
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer>
        <a href="#" className='footer-logo'>Mostafa Ezz</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-socials">
          {/* <a href="https://www.linkedin.com/in/mostafa-ezz-6a461b344/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/mostafaezz13" target="_blank"><FaGithub /></a>
          <a href="https://www.instagram.com/iammostafa.10/" target="_blank"><FaInstagram /></a> */}
        </div>
        <div className="footer-copyright">
          <small>&copy; <a href="#about">Mostafa Ezz</a>. All rights reserved.</small>
        </div>
      </footer>
    </div>
  )
}

export default Footer
