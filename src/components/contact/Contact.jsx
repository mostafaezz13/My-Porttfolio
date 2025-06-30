import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import React, { useRef } from 'react';

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "",
    link: "mailto:mostafaezz133@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "example@example.com",
    link: "https://m.me/iammostafa.10/",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "Whatsapp",
    info: "01012720036",
    link: "https://wa.me/+201012720036",
  },
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message sent! (simulation)");
    form.current.reset();
  };

  return (
    <div>
      <section className="contact" id="contact">
        <div className="top-section">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
        </div>
        <div className="container contact-container">
          <div className="contact-options">
            {ContactData.map(({ id, icon, title, info, link }) => (
              <article className="contact-option" key={id}>
                {icon}
                <h4>{title}</h4>
                <h5>{info}</h5>
                <a href={link} target="_blank" rel="noreferrer">
                  Send a message
                </a>
              </article>
            ))}
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Full Name" name="name" required />
            <input type="email" placeholder="Your Email" name="email" required />
            <textarea
              name="message"
              rows={10}
              placeholder="Your Message"
              required
            ></textarea>
            <button className="btn btn-primary" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
