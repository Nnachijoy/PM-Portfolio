import { useState } from "react";
import SingleProject from "../SingleProject/SingleProject";
import "./Projects.css";

// images 
import aihomework from "../../assets/images/remindr/aihomework.png";
import homeworktwo from "../../assets/images/remindr/homeworktwo.png";
import homeworkthree from "../../assets/images/remindr/homeworkthree.png";

//bulk downloader
import tifione from "../../assets/images/bulk/tifione.png";
import tifitwo from "../../assets/images/bulk/tifitwo.png";
import tifithree from "../../assets/images/bulk/tifithree.png";

//mathivities
import forkone from "../../assets/images/mathivities/forkone.png";
import forktwo from "../../assets/images/mathivities/forktwo.png";
import forkthree from "../../assets/images/mathivities/forkthree.png";

//weather
import marketintelligence from "../../assets/images/weather/marketintelligence.jpg";
import weatherTwo from "../../assets/images/weather/570shots_so-min.jpg";
import weatherThree from "../../assets/images/weather/56shots_so.png";

import arrow from "../../assets/icons/view-more-arrow.svg";

function Projects() {
  const [projects, setProjects] = useState([
    {
      name: "AI FOR HOMEWORK",
      description: `As the Product Manager for Homework AI, I guided the development of a 
      homework help app that includes parental controls and teacher-assigned tasks. I outlined key 
      features and requirements, working closely with developers to make sure everything was delivered smoothly.
       By staying on top of potential issues and managing priorities, I helped improve the development process by 30%,
        ensuring the app was easy to use for both parents and students.`,

      stack: ["ReactJS", "CSS", "Invision Studio"],
      images: [aihomework, homeworktwo, homeworkthree],
      links: ["https://aiforhomework.com/"]
    },
    {
      name: "CONVEY",
      description: `In my role leading the development of Tifi.tv, an AI app that converts text into videos and summarizes YouTube
       and podcast content, I oversaw the success of the development process. I identified key user needs and translated them into clear,
        actionable features, ensuring the app was intuitive and impactful. Collaborating with developers, I prioritized tasks and
         kept the project on track for a timely launch. I also conducted market research to refine the product strategy, which resulted 
         in a 50% boost in user engagement after launch.`,
      stack: ["ReactJS", "CSS", "Invision Studio"],
      images: [tifitwo, tifithree, tifione],
      links: ["https://tifi.tv/"]
    },
    {
      name: "FORKHIVE",
      description: `At Forkhive, I managed the development of a website that offers services like website maintenance,
       frontend development, and AI/ML consultation. I worked with the team to make sure the website was easy to use and 
       kept clients happy, boosting satisfaction by 25%. I also helped launch new designs that
        improved user engagement by 20%. On top of that,
        I oversaw our AI and data science services, helping clients use these tools to make smarter decisions. 
        By staying organized and keeping communication clear, I ensured smooth project delivery and support.`,
      stack: ["ReactJS", "CSS", "Invision Studio"],
      images: [forkone, forktwo, forkthree],
      links: ["https://www.forkhive.com/"],
    },
    {
      name: "Market Intelligence Report",
      description: `I revealed key trends, competitive insights, customer needs, market size, growth forecasts, and major industry players, and provided actionable insights and strategic recommendations.

The market intelligence report reveals key trends, competitive insights, and customer needs. It highlights market size, growth forecasts, and major industry players. This report provides actionable insights and strategic recommendations to innovate and position for success.`,
      stack: ["HTML", "CSS", "JavaScript", "Invision Studio"],
      images: [marketintelligence],
      links: ["https://docs.google.com/document/d/1bcYlqu-ARaZSJZeXdBGcQLDIrhAaTCwi_cBCbVFsTRA/edit?usp=sharing"]
    }
  ]);

  const mappedProjects = projects.map(({ name, description, stack, images, links }) => {
    return <SingleProject key={name} name={name} description={description} stack={stack} images={images} links={links} />;
  });

  return (
    <section className="projects">
      <div className="projects-inner">
        <h1 id="projects">PROJECTS</h1>
        <div className="projects-container">
          {mappedProjects}
        </div>
      </div>
    </section>
  );
}

export default Projects;
