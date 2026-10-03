import React from 'react';
import { Link } from 'react-router';
import './About.css';


const About = () => {
    return (
        <>
        <section>
            <h2>Our Mission</h2>
            <p>We strive to deliver the best services to our customers, ensuring satisfaction and quality in every project.</p>
        </section>
        <section>
            <h2>Our Vision</h2>
            <p>To be a leader in our industry, recognized for our innovative solutions and commitment to excellence.</p>
        </section>
        <section>
            <h2>Our Values</h2>
            <ul>
                <li>Integrity</li>
                <li>Customer Focus</li>
                <li>Innovation</li>
                <li>Teamwork</li>
            </ul>
        </section>
        </>
    );
};

export default About;