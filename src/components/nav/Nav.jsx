import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";

import { useState } from 'react';
function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  const handleLinkClick = (link) => {
    setActiveNav(link);
  };

  return (
    <div>
      <nav>
        <a href="#" className={activeNav === "#" ? "active" : ""} onClick={() => setActiveNav("#")}><IoHomeOutline /></a>
        <a href="#about" className={activeNav === "#about" ? "active" : ""} onClick={() => setActiveNav("#about")}><LuUserRound /></a>
        <a href="#skills" className={activeNav === "#skills" ? "active" : ""} onClick={() => setActiveNav("#skills")}><RiCustomerService2Fill /></a>
        <a href="#projects" className={activeNav === "#projects" ? "active" : ""} onClick={() => setActiveNav("#projects")}><BiBook /></a>
        <a href="#services" className={activeNav === "#services" ? "active" : ""} onClick={() => setActiveNav("#services")}><RiServiceLine /></a>
        <a href="#contact" className={activeNav === "#contact" ? "active" : ""} onClick={() => setActiveNav("#contact")}><BiMessageSquareDetail /></a>
      </nav>
    </div>
  )
}

export default Nav
