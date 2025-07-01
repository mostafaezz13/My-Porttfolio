import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "mostafaezz133@gmail.com",
    link: "mailto:mostafaezz133@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "iammostafa.10",
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // ✅ حالة لرسالة النجاح

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs.sendForm(
        "service_rfk76gf",
        "template_g6cm5ik",
        form.current,
        "QzuRSgxxzuC5274Pm"
      );
      form.current.reset();
      setFormData({ name: "", email: "", message: "" });

      setSuccessMessage("✅ Your message has been sent successfully!");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
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
            {ContactData.map(({ id, icon, title, info, link }) => {
              return (
                <article
                  className="contact-option"
                  key={id}
                  data-aos="fade-right"
                >
                  {icon}
                  <h4>{title}</h4>
                  <h5>{info}</h5>
                  <a href={link} target="_blank">
                    Send a message
                  </a>
                </article>
              );
            })}
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              data-aos="fade-left"
              data-aos-duration="500"
            />
            {errors.name && (
              <small style={{ color: "red" }}>{errors.name}</small>
            )}

            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              data-aos="fade-left"
              data-aos-duration="800"
            />
            {errors.email && (
              <small style={{ color: "red" }}>{errors.email}</small>
            )}

            <textarea
              name="message"
              rows={16}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              data-aos="fade-left"
              data-aos-duration="1000"
            ></textarea>
            {errors.message && (
              <small style={{ color: "red" }}>{errors.message}</small>
            )}

            <button className="btn btn-primary" data-aos="zoom-out">
              Send Message
            </button>

            {successMessage && (
              <p className="success-message fade-out">{successMessage}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
