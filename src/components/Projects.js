import React, { useEffect } from 'react';
import '../App.css'


const Projects = () => {
  const projects =
    [{
      company: "Trinity Technologies & Software Solutions Pvt Ltd.",
      projects: [
        {
          projectname: "Pedestrian Detection System",
          description: "Implemented an AI-based pedestrian detection model and deployed it on an edge device (Rockchip RK3588). Designed functionality where LED lights blink when a person is detected in a predefined zone; otherwise, they remain on. Integrated radar-based vehicle detection to trigger blinking lights and a horn when a vehicle approaches while a person is detected, providing real-time alerts to riders.",
          technologies: ["YOLOv8", "YOLOX", "Python", "OpenCV", "Rockchip RK3588", "Edge Deployment", "Radar Integration", "Real-Time Alerts"]
        },
        {
          projectname: "Attendance System Using Face Recognition",
          description: "Built and deployed a real-time attendance system on Rockchip RK3588 using InsightFace for accurate face detection and recognition. Ensured robust performance for multiple users in various lighting conditions and optimized inference speed for edge deployment.",
          technologies: ["InsightFace", "PySide6", "Python", "OpenCV", "Rockchip RK3588", "Edge Deployment", "Face Detection & Recognition", "Multiprocess concepts"]
        },
        {
          projectname: "Empty Parking Lot Detection (EPLD)",
          description: "Developed an AI-based system to detect empty parking lots and integrated RESTful APIs to push detection results to external applications. Built two versions: one with eANPR for extracting number plate text, and another that only detects empty slots. Ensured real-time updates for parking management and seamless integration with other platforms.",
          technologies: ["YOLOv8", "YOLOX", "Python", "Custom-built OCR model", "OpenCV", "REST API", "Real-Time Object Detection", "API Integration"]
        },
        {
          projectname: "Law Enforcement Analytics System",
          description: "Built an AI system to detect vehicles, identify traffic violations, and extract number plates. Cropped number plates and developed a custom OCR model to extract text. Managed the end-to-end pipeline from data collection, annotation, model training, and validation to deployment. Successfully deployed across 2 districts, providing actionable insights to law enforcement officers.",
          technologies: ["YOLOv8", "YOLOX", "Python", "OpenCV", "Imutils", "Custom-built OCR model", "REST API", "Real-Time Object Detection", "Multiprocess concepts"]
        },
        {
          projectname: "Red Light Violation Detection",
          description: "Developed an AI-based system to detect vehicles violating traffic signals and integrated number plate extraction for automated reporting. The system identifies violating vehicles in real-time and supports subsequent enforcement actions.",
          technologies: ["YOLOv8", "YOLOX", "Python", "OpenCV", "Imutils", "Custom-built OCR model", "REST API", "Real-Time Object Detection", "Multiprocess concepts"]
        },
        {
          projectname: "Law Enforcement Web Application",
          description: "Designed and built a web application using React.js and Django for law enforcement officers to visualize violations. Included dashboards with graphs, tables for validating channels, and functionalities for downloading notices in single, bulk, or full formats. Built web-based functionality for data visualization, validation, and downloading notices via Excel or PDF.",
          technologies: ["React.js", "Django", "Python", "REST API", "Data Visualization", "Dashboard Design", "Web Development"]
        },
        {
          projectname: "Multiline Free-Flow ANPR",
          description: "Implemented a custom-trained vehicle detection model and OCR model for extracting number plate text in free-flow traffic scenarios. Optimized the pipeline for high-speed detection and real-time inference, and deployed on edge Jetson devices.",
          technologies: ["YOLOv8", "YOLOX", "Python", "OpenCV", "Imutils", "Custom-built OCR model", "REST API", "Real-Time Object Detection", "Protobuf for server communication"]
        },
        {
          projectname: "Small AI Projects",
          description: "Contributed to smaller AI projects, including PPE kit detection for compliance monitoring, number plate extraction, vehicle ANPR systems, and gender classification. Developed models and pipelines to ensure accurate detection in complex scenarios.",
          technologies: ["Python", "YOLOv8", "YOLOX", "OpenCV", "Imutils"]
        }
      ]
    }, {
      company: "Express Rupaya",
      projects: [
        {
          projectname: "CRM Dashboard",
          description: "Developed a customer relationship management dashboard using React.js, Node.js (Express.js), and MySQL to manage borrowers and lenders efficiently. Enabled real-time team tracking with dynamic updates and integrated automated email alerts for key actions.",
          technologies: ["React.js", "Node.js (Express.js)", "MySQL", "REST API", "Real-Time Data Updates", "Automated Email Integration", "Frontend & Backend Development"]
        },
        {
          projectname: "Real Estate App",
          description: "Built a web application for real estate listings and lead management using React.js and FastAPI, with features including property management, user authentication, and lead tracking.",
          technologies: ["React.js", "FastAPI", "Python", "MySQL", "User Authentication", "Lead Management", "REST API", "Frontend & Backend Development"]
        },
        {
          projectname: "LinkedIn Automation",
          description: "Developed a web application using React.js and Node.js to automate scheduling and posting of LinkedIn content for marketing campaigns.",
          technologies: ["React.js", "Node.js", "JavaScript", "REST API", "Automation", "Scheduling & Posting", "Web Application Development"]
        },
        {
          projectname: "Mandate Management App",
          description: "Contributed to both frontend and backend of an internal mandate tracking app using React.js and Node.js. Implemented UI enhancements and added a dynamic letterhead generation feature with auto-filled borrower data fields.",
          technologies: ["React.js", "Node.js", "JavaScript", "REST API", "Frontend & Backend Development", "Dynamic UI Components", "Auto-Filled Forms"]
        }
      ]
    }
    ];

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show"); // add "show" when visible
            observer.unobserve(entry.target);   // reveal only once
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="container">
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div className='threaded-timeline'>
        {projects.map((companyBlock, cIndex) => (
          <div key={cIndex}>
            <p className="company-title">{companyBlock.company}</p>
            {companyBlock.projects.map((proj, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "throw-right" : "throw-left"}`}
              >
                <div className={`timeline-dot ${index % 2 !== 0 ? "timeline-dot-right" : "timeline-dot-left"}`}></div>
                <div className="timeline-card">
                  <div className={`${index % 2 !== 0 ? "top-right-circle" : "top-left-circle"}`}></div>

                  <h4>{proj.projectname}</h4>
                  <p>{proj.description}</p>
                  <p><strong>Technologies:</strong> {proj.technologies.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;