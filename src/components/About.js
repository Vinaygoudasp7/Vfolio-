import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section id="about" className="container">
      <div className="section-title">
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Vinaygouda S Patil, a passionate AI & Computer Vision Engineer based in Vijaypura.
            I enjoy building intelligent applications that combine real-time computer vision with modern web technologies to deliver impactful user experiences.
          </p>

          <p>
            Passionate and results-driven AI/ML and Full-Stack Developer with hands-on experience in building scalable web applications
            and intelligent computer vision systems. Proficient in technologies like Python, React, Django, FastAPI, OpenCV, and YOLO,
            TensorFlow. Currently working as a Programmer at Trinity Technologies and Software Solutions Pvt. Ltd., with a strong track
            record of delivering real-time AI-powered solutions. Seeking to contribute to innovative projects that combine AI with modern
            web technologies to solve real-world challenges.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">
              {(() => {
                const start = new Date(2023, 8); // Sept 2023
                const now = new Date();

                let years = now.getFullYear() - start.getFullYear();
                let months = now.getMonth() - start.getMonth();
                if (months < 0) {
                  years--;
                  months += 12;
                }
                return months > 0 ? `${years}y ${months}m` : `${years}y`;
              })()}
            </span>
            <span className="stat-label"> Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;