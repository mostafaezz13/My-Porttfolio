import "./home.css";
import Me from "../../assets/me.png";
import Cv from "../../assets/My-Cv.pdf";
import HomeSocials from "./homesocials";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className="home">
      <div className="container home_container">
        <h4 data-aos="fade-down">Hello I'm</h4>
        <h1 data-aos="fade-down">Mostafa Ezz</h1>
        <h4 className="text-light" data-aos="fade-down">Full-stack Developer</h4>
      <div className="btns">
        <a href={Cv} className="btn" download data-aos="fade-right">Download CV</a>
        <a href="#" className="btn btn-primary" data-aos="fade-left">Let's Talk</a>
      </div>
      <div className="me" data-aos="zoom-in">
        <img src={Me} alt="Mostafa Ezz" />
      </div>

      <a href="#about" className="scroll_down" data-aos="fade-left">Scroll Down</a>

      <HomeSocials />
      </div>
    </div>
  );
}

export default Home;
