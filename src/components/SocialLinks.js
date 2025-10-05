import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <ul className="social-links-floating ">
            <li>
                <a href="https://github.com/Vinaygoudasp7" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/vinaygouda-s-patil-ba5678229/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href="mailto:vinaysp254@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>
            </li>
        </ul>
    );
};

export default SocialLinks;