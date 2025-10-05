import React from 'react';

const Skills = () => {
  const skillsList = [
    { name: "Mysql", level: "Intermediate" },
    { name: "Python", level: "Advanced" },
    { name: "Django/FastApi", level: "Intermediate" },
    { name: "OpenCV", level: "Intermediate" },
    { name: "YOLOv8", level: "Intermediate" },
    { name: "YOLOX", level: "Intermediate" },
    { name: "NumPy/Pandas", level: "Intermediate" },
    { name: "TensorFlow", level: "Intermediate" },
    { name: "Scikit-learn", level: "Basic" },
    { name: "PaddlePaddle", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "Docker", level: "Basic" },
    { name: "Linux", level: "Intermediate" },
    { name: "RESTful APIs", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "HTML5/CSS3", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="container">
      <div className="section-title">
        <h2>Skills</h2>
      </div>
      <div className="skills-list">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-card">
            <p className='skill-text'>{skill.name}</p>
            <span className='skill-pill'>{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;