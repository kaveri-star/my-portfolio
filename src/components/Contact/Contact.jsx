import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact</h2>
    <p>Email me at <a href="mailto:kaveri@gmail.com">kaveri@gmail.com</a></p>
    <div className="social-icons">
      <FaInstagram />
      <CiFacebook />
      <FaLinkedin />
      <FaGithub />
    </div>
  </section>
);

export default Contact;
