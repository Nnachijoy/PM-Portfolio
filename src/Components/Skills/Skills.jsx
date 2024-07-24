import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './skills.css';

function Skills() {
  const skills = [
    { name: 'Project Management', level: 95 },
    { name: 'Agile Methodologies', level: 95 },
    { name: 'Product Roadmap', level: 90 },
    { name: 'Market Research', level: 95 },
    { name: 'Data Analysis', level: 90 },
    { name: 'User Experience (UX)', level: 95 },
    { name: 'Communication', level: 95 },
    { name: 'Stakeholder Management', level: 95 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Strategic Planning', level: 90 },
  ];

  return (

    <section className="skills">
      <Container className="skills-inner mt-5">
        <h1 id="skills" className="text-center">Skill Set</h1>
        <Row className="mt-4 justify-content-center">
          {skills.map((skill, index) => (
            <Col md={6} sm={12} key={index} className="skill-item mb-3">
              <div className="skill-card">
                <span className="skill-name">{skill.name}</span>
                <ProgressBar now={skill.level} className="custom-progress-bar"/>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
