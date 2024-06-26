// src/components/About.js
import React from 'react';
import './About.css';
import profileImage from '../assets/profile-image.png';

const About = () => {
    return (
        <section id="about">
            <div className="about-content">
                <div className="about-details">
                    <h2>Vaibhav Kshirsagar</h2>
                    <p className="description">As a graduate student in Electronics and Telecommunication, I am deeply passionate about software development. My professional experience as an embedded software developer has provided me with valuable skills and insights, further fueling my enthusiasm for this field. I am eager to leverage my background and expertise to pursue opportunities in software development and contribute meaningfully to innovative projects.</p>
                    <a href="https://drive.google.com/file/d/1nRRPgzxVnbGPzaQocfbE3QpY6T67ztXk/view" target="_blank" rel="noopener noreferrer">
                        <button className="hire-button">Download Resume</button>
                    </a>
                </div>
                <div className="profile-image-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>
            </div>
        </section>
    );
}

export default About;
