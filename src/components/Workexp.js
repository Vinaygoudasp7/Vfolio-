import React from "react";
import { FaCode, FaRegClock } from "react-icons/fa";

const Workexp = () => {
  const internships = [
    {
      company: "Trinity Technologies & Software Solutions Pvt Ltd – Hubli, Karnataka, India",
      position: "Programmer",
      duration: "Sep 2023 - Present",
      tools: [
        "Python", "YOLOv8", "YOLOX", "OpenCV", "Numpy", "Pandas",
        "Tensorflow", "Scikit-learn", "PaddlePaddle", "FastAPI",
        "Django", "React.js", "MySQL", "Git", "Docker", "Linux", "RESTfulAPI"
      ],
      experiencePoints: [
        "Developed an end-to-end OCR system for number plate recognition using a pretrained YOLO model as the base architecture, created and annotated a custom dataset, fine-tuned the model for text detection, and designed the output pipeline for accurate character recognition and structured results.",
        "Implemented OCR solutions with PaddleOCR, including number plate recognition and text extraction from PDF documents.",
        "Engineered real-time RTSP camera feed processing pipelines on Jetson Nano and Rockchip edge devices, leveraging Python-based multithreading with inference optimized on both CPU (OpenVINO) and GPU in Linux environments.",
        "Designed and developed full-stack web applications using Python (FastAPI, Django), React.js, and MySQL, delivering secure and scalable solutions.",
        "Built RESTful APIs with FastAPI and Django REST Framework to manage user data, session states, and AI analytics endpoints.",
        "Created modular frontend components with React.js, ensuring responsive UI/UX and seamless client-side routing.",
        "Wrote clean, reusable backend code for form processing, database integration, authentication, and data visualization.",
        "Integrated AI inference modules as microservices for live data analytics using custom-trained models (YOLOv8, YOLOX, PaddlePaddle).",
        "Guided the team in data collection and annotation for model training, and managed the complete pipeline from dataset preparation to model validation.",
        "Trained multiple models on GPU for optimized performance, mentored freshers on best practices, and drove initiatives to improve model accuracy.",
        "Developed intuitive dashboards for law enforcement officers to monitor live camera feeds, view violations, and export reports."

      ],
    },
    {
      company: "Express Rupaya – Mumbai, Maharashtra, India",
      position: "Full Stack Developer Intern",
      duration: "May 2023 - Present",
      tools: ["React.js", "Node.js", "Express.js", "MySQL", "FastAPI", "Django"],
      experiencePoints: [
        "Developed and deployed a CRM Dashboard using React.js, Node.js (Express.js), and MySQL to manage borrowers and lenders; implemented real-time team tracking features and integrated automated email alerts.",
        "Built a Real Estate Web Application with React.js and FastAPI, featuring property management, secure user authentication, and lead tracking to streamline real estate operations.",
        "Created a LinkedIn Automation Tool using React.js and Node.js to schedule and automate content posting for marketing campaigns, improving consistency and efficiency in outreach.",
        "Contributed to an internal Mandate Management App by enhancing the frontend UI in React.js and implementing backend logic in Node.js; added a dynamic letterhead generation feature with borrower auto-fill functionality."
      ],
    }
  ];

  return (
    <section id="workexperience">
      <div className="section-title container">
        <h2>Work Experience</h2>
      </div>

      <div className="workexp-container">
        {internships.map((intern, idx) => (
          <div
            key={idx}
            className={`internship-card ${idx % 2 === 0 ? "slide-right" : "slide-left"}`}
          >
            {/* Header */}
            <div className="internship-header text-animate" style={{ "--i": 1 }}>
              <h2>{intern.position}</h2>
              <h3>{intern.company}</h3>
            </div>

            {/* Duration + Tools */}
            <div className="internship-meta text-animate" style={{ "--i": 2 }}>
              <span className="pill">
                <FaRegClock /> {intern.duration}
              </span>
              <div className="tools">
                {intern.tools.map((tool, i) => (
                  <span key={i} className="pill tool text-animate" style={{ "--i": i + 0}}>
                    <FaCode /> {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="projects-list">
              {intern.experiencePoints.map((point, i) => (
                <div
                  key={i}
                  className="project-item text-animate">
                 <span className="project-icon">{">"}</span> <span className="fw-bold">{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workexp;
