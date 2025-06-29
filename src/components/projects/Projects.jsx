import "./projects.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";
import Img4 from "../../assets/portfolio4.jpg";
import Img5 from "../../assets/portfolio5.png";
import Img6 from "../../assets/portfolio6.jpg";

const ProjectsData = [
  {
    id: 1,
    image: Img1,
    title: "Portfolio Item 1",
    github: "https://github.com",
    demo: "https://live-demo.com",
  },
  {
    id: 2,
    image: Img2,
    title: "Portfolio Item 2",
    github: "https://github.com",
    demo: "https://live-demo.com",
  },
  {
    id: 3,
    image: Img3,
    title: "Portfolio Item 3",
    github: "https://github.com",
    demo: "https://live-demo.com",
  },
  {
    id: 4,
    image: Img4,
    title: "Portfolio Item 4",
    github: "https://github.com",
    demo: "https://live-demo.com",
  },
  {
    id: 5,
    image: Img5,
    title: "Portfolio Item 5",
    github: "https://github.com",
    demo: "https://live-demo.com",
  },
  {
    id: 6,
    image: Img6,
    title: "Portfolio Item 6",
    github: "https://github.com",
    demo: "https://live-demo.com",
  },
];
function Projects() {
  return (
    <div>
      <section className="projects" id="projects">
        <div className="top-section">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
        </div>
        <div className="container projects-container">
          {ProjectsData.map(({ id, image, title, github, demo }) => {
            return (
              <article className="portfolio-item" key={id}>
                <div className="portfolio-item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-btns">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Projects;
