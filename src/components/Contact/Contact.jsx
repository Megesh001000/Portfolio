import "./Contact.css"

import { FaEnvelope,FaGithub,FaFacebook,FaInstagram, FaLinkedin } from "react-icons/fa"
function Contact() {
  return (
    <section id="contact" className="contact-section">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-text">
            I’m open to opportunities, collaborations, and discussions.
        Feel free to reach out.
        </p>
        <div className="contact-links">
          <a href="mailto:megesh16@gmail.com" ><FaEnvelope/>megesh16@gmail.com</a>
          <a href="https://github.com/Megesh001000" target="_blank" rel="noreferror">
          <FaGithub/>
          Github
          </a>
          <a href="https://www.linkedin.com/in/megeshwaran-m-a45993332" target="_blank" rel="noreferror">
          <FaLinkedin/>
          LinkedIn
          </a>

          <a href="/Megeshwaran M Resume.pdf" target="_blank" rel="noreferror">Download Resume</a>
        </div>
    </section>
  )
}

export default Contact