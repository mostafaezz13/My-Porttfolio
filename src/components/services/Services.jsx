import "./services.css";
// import { MdDesignServices } from "react-icons/md";
// import { IoIosRocket } from "react-icons/io";
// import { FaCode } from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="services">
      <div className="top-section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container-services">
        <article className="card">
          {/* <MdDesignServices className="icon" /> */}
          <h3>Web Design</h3>
          <p className="text-light">
            I create visually appealing and user-friendly web designs that
            enhance user experience and engagement.
          </p>
        </article>
        <article className="card">
          {/* <IoIosRocket className="icon" /> */}
          <h3>Fast Performance</h3>
          <p className="text-light">
            I optimize websites for speed and performance, ensuring fast load
            times and smooth interactions.
          </p>
        </article>
        <article className="card">
          {/* <FaCode className="icon" /> */}
          <h3>Clean Code</h3>
          <p className="text-light">
            I write clean, maintainable code that follows best practices, making
            it easy to update and scale projects in the future.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;
