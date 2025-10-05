import React from 'react';

const Interests = () => {
    const interests = [
        "Web Development",
        "Open Source",
        "Machine Learning",
        "UI/UX Design",
        "Tech Blogging",
        "Photography",
        "Reading",
        "Traveling"
    ];

    return (
        <section id="interests" className="interests_container">
            <div className="section-title">
                <h2>Interests & Hobbies</h2>
            </div>
            <ul className="interests-list">
                {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </section>
    );
};

export default Interests;