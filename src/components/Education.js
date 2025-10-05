import React from 'react';

const Education = () => {
    const educationList = [
        {
            degree: "Bachelor of Engineering",
            branch:'Mechanical Engineering',
            school: "AGMR COLLEGE OF ENGINEERING & TECHNOLOGY, HUBLI",
            year: "2018 - 2022",
            CGPA: "8.03/10"
        },
        {
            degree: "12TH (PUC)",
            school: "Aryabhatt Pu Science College Dharwad , Karnataka",
            year: "2016 - 2018",
            Percentage: "66.16"
        },
        {
            degree: "SSLC",
            school: "Excellent English Medium Primary And High School",
            year: "2006 - 2016",
            Percentage: "87.84"
        }
    ];

    return (
        <section id="education" className="container">
            <div className="section-title">
                <h2>Education</h2>
            </div>
            <div className="education-list">
                {educationList.map((edu, index) => (
                    <div key={index} className="education-item">
                        <h3>{edu.degree}</h3>
                        <p>{edu?.branch}</p>
                        <p className="school">{edu.school}</p>
                        {edu.CGPA && <p className="cgpa">CGPA: {edu.CGPA}</p>}
                        {edu.Percentage && <p className="percentage">Percentage: {edu.Percentage}</p>}
                        <p className="year">{edu.year}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;