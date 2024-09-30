// import myimage from "../../assets/myimage.png";
import { Container, Row, Col } from 'react-bootstrap';
import "./journey.css";

function Journey() {
  return (
    <section className="journey">
      <div className="journey-inner">

              <h1 id="journey" className="mt-5">Future Growth Plans</h1>
              <h2>
                As I continue my career as a Product Manager, I plan to:
              </h2>
              <ul>
                <li><strong>Continuous Learning:</strong> Pursue certifications like PMP
                 and Certified Scrum Master, and take online courses on advanced PM topics.</li>
                <li><strong>Networking and Mentorship:</strong> Join PM communities, attend 
                industry conferences, and seek mentorship from experienced professionals.</li>
                <li><strong>Practical Experience:</strong> Take on more challenging projects,
                 volunteer for leadership roles, and seek opportunities to innovate.</li>
                <li><strong>Personal Development:</strong> Improve my negotiation, conflict resolution, 
                and public speaking skills through targeted training and practice.</li>
              </ul>
              
              <h2 className="mt-5">
                I am committed to continuous growth and development, and I look forward to leveraging my skills
                 and experience to contribute to more successful projects in the future.
              </h2>
              {/* <h2>
                Learn more about the HNG Internship at <a href="https://hng.tech/internship">HNG Internship</a>.
              </h2> */}
      </div>
    </section>
  );
}

export default Journey;
