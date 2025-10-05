import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../App.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container-fluid">
                <div className="section-title">
                    <h2>Contact Me</h2>
                </div>
                <div className="contact-details-container">
                    <div className="contact-card">
                        <a href="tel:+91 7022413461" className="contact-item">
                            <FaPhone className="contact-icon" />
                            <span>+91 7022413461</span>
                        </a>

                        <a href="mailto:vinaysp254@gmail.com" className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <span>vinaysp254@gmail.com</span>
                        </a>

                        <a href="https://github.com/Vinaygoudasp7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item">
                            <FaGithub className="contact-icon" />
                            <span>github.com/Vinaygoudasp7</span>
                        </a>

                        <a href="https://www.linkedin.com/in/vinaygouda-s-patil-ba5678229/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item">
                            <FaLinkedin className="contact-icon" />
                            <span>linkedin.com/in/vinaygoudasp</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;