import React from 'react';
// import myimage from "../../assets/images/myimage.jpg";
// import myimage from "../../assets/myimage.jpg";
import myimage from "../../assets/images/myimage.jpg";

import { Container, Row, Col } from 'react-bootstrap';
import "./AboutMe.css";

function AboutMe() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="about">
      <Container className="about-me-inner">
        <h1 id="about">ABOUT ME</h1>
        <Row className="about-me-container">
          {/* Image Column */}
          <Col lg={6} md={12} className="about-me-image-col">
            <img src={myimage} alt="Nnachi Joy" className="about-me-image" />
          </Col>

          {/* Text Column */}
          <Col lg={6} md={12} className="about-me-text-col">
            <div className="about-me-text-content">
              <p>
                Hi, I’m Nnachi Joy, and my journey into product management has been a really interesting one. 
                I started off writing code and building interfaces as a front-end developer, but soon found myself asking why we were building certain features. 
                I wanted to understand the bigger picture—what makes a product truly valuable? 
                That curiosity led me into product management, where I could have a direct hand in shaping the vision and direction of products.
              </p>
              <p>
                One thing I’ve learned is that not every client knows exactly what they want. 
                Sometimes the ideas are vague, but that’s where I come in. 
                I’m great at taking loose ideas, working with user stories, and turning them into something well-structured and strategic.
              </p>
              <p>
                During the HNG Internship, I made it to the top 500 out of 12,000 participants, which gave me hands-on experience managing projects like ForkHive, built from scratch. 
                Now, with my experience, I can confidently lead teams and build impactful products.
              </p>

              <button onClick={handleScrollToContact}>Get in Touch</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
