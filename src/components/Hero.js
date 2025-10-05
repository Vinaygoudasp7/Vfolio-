import React from "react";
import { ReactTyped } from "react-typed";
import "../App.css";

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span>Hi, I'm </span>
                        <span className="highlight">VINAYGOUDA S PATIL</span>
                    </h1>

                    <p className="hero-description typed-wrapper">
                        <ReactTyped
                            strings={[
                                '🚀 Exploring the intersection of AI 🤖, Computer Vision 📷, and Web Development 💻 to craft smart, scalable, and impactful solutions.'
                            ]}
                            typeSpeed={50}        // typing speed
                            backSpeed={20}        // speed of deleting
                            backDelay={2000}      // delay before deleting
                            loop={true}           // repeat forever
                            showCursor={true}
                            cursorChar="|"
                        />

                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="cta-button">
                            View My Work
                        </a>
                        <a href="#contact" className="cta-button secondary">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
