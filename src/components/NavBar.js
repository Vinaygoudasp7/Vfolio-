import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/workexperience">Work Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/internships">Internships</Link></li>
                <li><Link to="/soft-skills">Soft Skills</Link></li>
                <li><Link to="/hobbies">Hobbies</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;