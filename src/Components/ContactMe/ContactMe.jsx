import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import arrow from "../../assets/icons/light-arrow.svg";
import "./ContactMe.css";

function ContactMe() {
  return (
    <section className="contact">
      <div className="contact-inner">
        <h1 id="contact">CONTACT ME</h1>

        <div className="contact-container">
          <div className="email">
            <div className="icon-container">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "white", fontSize: '3rem' }} />
            </div>
            <a title="nnachijoychima2000@gmail.com" href="mailto:nnachijoychima2000@gmail.com" target="_blank" rel="noopener noreferrer" className="email-link">
              Send me an email <img src={arrow} alt="arrow" />
            </a>
          </div>

          <div className="whatsapp">
            <div className="icon-container">
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#25D366", fontSize: '3rem' }} />
            </div>
            <a href="https://wa.me/07043560704" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
              Let's chat on WhatsApp <img src={arrow} alt="arrow icon" />
            </a>
          </div>

          <div className="linkedin">
            <div className="icon-container">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077B5", fontSize: '3rem' }} />
            </div>
            <a href="https://www.linkedin.com/in/nnachi-joy-841753219" target="_blank" rel="noopener noreferrer" className="linkedin-link">
              Connect on LinkedIn <img src={arrow} alt="arrow icon" />
            </a>
          </div>
        </div>

        <p className="attr">
          Nnachi Joy Chima
        </p>
        
      </div>
    </section>
  );
}

export default ContactMe;
