import "./home.css";
import Me from "../../assets/me.png";
import Cv from "../../assets/My-Cv.pdf";
import HomeSocials from "./homesocials";
function Home() {
  return (
    <div className="home">
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Mostafa Ezz</h1>
        <h4 className="text-light">Full-stack Developer</h4>
      <div className="btns">
        <a href={Cv} className="btn" download>Download CV</a>
        <a href="#" className="btn btn-primary">Let's Talk</a>
      </div>
      <div className="me">
        <img src={Me} alt="" />
      </div>

      <a href="#about" className="scroll_down">Scroll Down</a>

      <HomeSocials />
      </div>
    </div>
  );
}

export default Home;
