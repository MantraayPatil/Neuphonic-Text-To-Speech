import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/courses'); // Navigate to courses or any other relevant page
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Online Code Tutor</h1>
                <p>Master coding with personalized lessons and expert guidance.</p>
                <button className="get-started-btn" onClick={handleGetStarted}>
                    Get Started
                </button>
            </header>
            <div className="home-features">
                <div className="feature">
                    <h3>Personalized Learning</h3>
                    <p>Customized lessons tailored to your skill level and goals.</p>
                </div>
                <div className="feature">
                    <h3>Expert Tuting by our own LLM.</h3>
                    <p>Learn from one of the best LLM in town.</p>
                </div>
                <div className="feature">
                    <h3>Hands-on Projects</h3>
                    <p>Build real-world projects to solidify your knowledge using the help of our LLM.</p>
                </div>
                <div className="feature">
                    <h3>Speech and Text Conversions</h3>
                    <p> Input speech or text to ease the process and get a speech and text reply.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
