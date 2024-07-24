import myimage from "../../assets/myimage.png";
import { Container, Row, Col } from 'react-bootstrap';
import "./journey.css";

function Journey() {
  return (
    <section className="journey">
      <div className="journey-inner">
        <h1 id="journey">The Journey so far...</h1>
        <h2>
          Throughout my journey as a Product Manager in the <a href="https://hng.tech/internship">HNG Internship</a>, I have acquired invaluable
          skills and knowledge that have significantly contributed to my professional growth. This section
          highlights what I have learned and how I plan to continue my development.
        </h2>
         
        <h1 id="journey" className="mt-5">Values Gotten from the HNG Internship</h1>

        <h2>
                During the HNG Internship, I worked on several projects that honed my project management, technical, and leadership skills. Here are some key takeaways:
              </h2>
              <ul>
                <li><strong>Project Management Skills:</strong> I learned and applied how to write detailed PRD, come up with actionable github ticket as well as documenting detailed FRD to manage project workflows effectively.</li>
                <li><strong>Technical Skills:</strong> I improved my proficiency with tools like Jira, Linear, Trello for task management.</li>
                <li><strong>Communication and Leadership:</strong> I enhanced my ability to communicate clearly with team members, team leads, mentors and other stakeholders, ensuring everyone was aligned on project goals.</li>
                <li><strong>Problem-Solving and Decision Making:</strong> I faced several challenges that required quick thinking and decisive actions, which improved my problem-solving skills.</li>
                <li><strong>Collaboration and Teamwork:</strong> Working with cross-functional teams taught me the value of collaboration and how to leverage diverse perspectives to achieve project success.</li>
              </ul>


              <h1 id="journey" className="mt-5">Future Growth Plans</h1>
              <h2>
                As I continue my career as a Product Manager, I plan to:
              </h2>
              <ul>
                <li><strong>Continuous Learning:</strong> Pursue certifications like PMP and Certified Scrum Master, and take online courses on advanced PM topics.</li>
                <li><strong>Networking and Mentorship:</strong> Join PM communities, attend industry conferences, and seek mentorship from experienced professionals.</li>
                <li><strong>Practical Experience:</strong> Take on more challenging projects, volunteer for leadership roles, and seek opportunities to innovate.</li>
                <li><strong>Personal Development:</strong> Improve my negotiation, conflict resolution, and public speaking skills through targeted training and practice.</li>
              </ul>
              
              <h2 className="mt-5">
                I am committed to continuous growth and development, and I look forward to leveraging my skills and experience to contribute to successful projects in the future.
              </h2>
              <h2>
                Learn more about the HNG Internship at <a href="https://hng.tech/internship">HNG Internship</a>.
              </h2>
      </div>
    </section>
  );
}

export default Journey;
