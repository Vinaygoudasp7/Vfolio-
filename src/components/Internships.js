import React from "react";
import "../App.css";
import { FaCode, FaProjectDiagram, FaRegClock } from "react-icons/fa";

const Internship = () => {
  const internship = {
    company: "Express Rupaya – Mumbai, Maharashtra, India",
    position: "Full Stack Developer Intern",
    duration: `May 2023 - Present`,
    tools: ["React.js", "Node.js", "Express.js", "MySQL", "FastAPI", "Django"],
    projects: [
      {
        title: "CRM Dashboard",
        description: `Developed a customer relationship management dashboard using React.js, 
        Node.js (Express.js), and MySQL to efficiently manage borrowers and lenders. 
        Enabled real-time team tracking with dynamic updates and integrated automated email alerts.`,
      },
      {
        title: "Real Estate App",
        description: `Built a web application for real estate listing and lead updates using React.js 
        and FastAPI, with features like property management, user login, and lead handling.`,
      },
      {
        title: "LinkedIn Automation",
        description: `Developed a web application using React.js and Node.js to automate scheduling 
        and posting of LinkedIn content for marketing purposes.`,
      },
      {
        title: "Mandate Management App",
        description: `Contributed to both frontend and backend of an internal mandate tracking app 
        using React.js and Node.js. Implemented UI improvements and added a dynamic letterhead 
        generation feature with auto-filled borrower data.`,
      },
    ],
  };

  return (
    <section id="internship" className="container">
      <div className="section-title">
        <h2>Internship</h2>
      </div>
      <div className="internship-container">
        <div className="internship-card">
          <div className="internship-header">
            <h2>{internship.position}</h2>
            <h3>{internship.company}</h3>
          </div>
          <div className="internship-meta">
            <span className="pill">
              <FaRegClock /> {internship.duration}
            </span>
            <div className="tools">
              {internship.tools.map((tool, i) => (
                <span key={i} className="pill tool">
                  <FaCode /> {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="projects-list">
            {internship.projects.map((proj, i) => (
              <div key={i} className="project-item">
                <FaProjectDiagram className="icon" />
                <h5 className="fw-bold">{proj.title}</h5>
                <p>{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
