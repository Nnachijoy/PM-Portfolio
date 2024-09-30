import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faChartLine, faRoad, faSearch, faDatabase, faUser, faCommentDots, faUsers, faLightbulb, faChartPie } from '@fortawesome/free-solid-svg-icons';
import './skills.css';

function Skills() {
  const skills = [
    { name: 'Project Management', icon: faTasks, description: 'Effective management of project timelines, deliverables, and teams.' },
    { name: 'Agile Methodologies', icon: faChartLine, description: 'Expertise in agile frameworks like Scrum and Kanban.' },
    { name: 'Product Roadmap', icon: faRoad, description: 'Creating and maintaining product roadmaps for development.' },
    { name: 'Market Research', icon: faSearch, description: 'Conducting detailed research to understand market trends.' },
    { name: 'Data Analysis', icon: faDatabase, description: 'Proficiency in analyzing data to drive informed decisions.' },
    { name: 'User Experience (UX)', icon: faUser, description: 'Designing user-centered experiences for digital products.' },
    { name: 'Communication', icon: faCommentDots, description: 'Clear and effective communication with stakeholders.' },
    { name: 'Stakeholder Management', icon: faUsers, description: 'Managing relationships with key stakeholders and teams.' },
    { name: 'Problem Solving', icon: faLightbulb, description: 'Strategic approach to identifying and resolving challenges.' },
    { name: 'Strategic Planning', icon: faChartPie, description: 'Developing long-term strategies for business growth.' },
  ];

  return (
    <section className="skills">
      <Container className="skills-inner mt-5">
        <h1 id="skills" className="text-center skill">Skill Set</h1>
        <Row className="mt-4 justify-content-center">
          {skills.map((skill, index) => (
            <Col md={4} sm={6} key={index} className="skill-item mb-4">
              <div className="skill-card text-center">
                <FontAwesomeIcon icon={skill.icon} size="3x" className="skill-icon mb-3" />
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
