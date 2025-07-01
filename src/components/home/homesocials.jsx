import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function homesocials() {
  return (
    <div className='homesocials' data-aos="fade-right">
      <a href="https://www.linkedin.com/in/mostafa-ezz-6a461b344/" target='_blank'><FaLinkedin /></a>
      <a href="https://github.com/mostafaezz13" target='_blank'><FaGithub /></a>
      <a href="https://www.instagram.com/iammostafa.10/" target='_blank'><FaInstagram /></a>
    </div>
  )
}

export default homesocials
