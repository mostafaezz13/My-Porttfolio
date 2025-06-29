import "./skills.css";
import Css from "../../assets/css3.svg";
import Figma from "../../assets/figma.svg";
import Javascript from "../../assets/javascript.svg";
import Nodejs from "../../assets/nodejs.svg";
import React from "../../assets/react.svg";
import Tailwindcss from "../../assets/tailwindcss.svg";
import Mysql from "../../assets/mysql.svg";
import Laravel from "../../assets/laravel.svg";

const SkillsData = [
  {
    id: 1,
    img: Css,
    title: "CSS",
    disc: "User Interface",
  },
  {
    id: 2,
    img: Figma,
    title: "Figma",
    disc: "User Interface Design",
  },
  {
    id: 3,
    img: Javascript,
    title: "Javascript",
    disc: "Web Development",
  },
  {
    id: 4,
    img: Nodejs,
    title: "Node.js",
    disc: "Backend Development",
  },
  {
    id: 5,
    img: React,
    title: "React",
    disc: "Frontend Development",
  },
  {
    id: 6,
    img: Tailwindcss,
    title: "Tailwind CSS",
    disc: "UI Framework",
  },
  {
    id: 7,
    img: Mysql,
    title: "MySQL",
    disc: "Database Management",
  },
  {
    id: 8,
    img: Laravel,
    title: "Laravel",
    disc: "PHP Framework",
  },
];

function Skills() {
  return (
    <div>
      <section className="skills" id="skills">
        <div className="top-section">
          <h5>What Skills I Have?</h5>
          <h2>My Experience</h2>
        </div>
        <div className="container container-skills">
          {SkillsData.map(({ id, img, title, disc }) => (
            <article className="card-skill">
              <div className="icon">
                <img src={img} alt="" />
              </div>
              <div className="content">
                <h4>{title}</h4>
                <p className="text-light">{disc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
