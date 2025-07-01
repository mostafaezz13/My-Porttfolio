import './nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";

import { useState, useEffect } from 'react';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '#';

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (window.scrollY >= top - 100) {
          current = `#${section.getAttribute('id')}`;
        }
      });

      setActiveNav(current);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <a href="#" className={activeNav === "#" ? "active" : ""}><IoHomeOutline /></a>
      <a href="#about" className={activeNav === "#about" ? "active" : ""}><LuUserRound /></a>
      <a href="#skills" className={activeNav === "#skills" ? "active" : ""}><RiCustomerService2Fill /></a>
      <a href="#services" className={activeNav === "#services" ? "active" : ""}><RiServiceLine /></a>
      <a href="#projects" className={activeNav === "#projects" ? "active" : ""}><BiBook /></a>
      <a href="#contact" className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail /></a>
    </nav>
  );
}

export default Nav;
