import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    // const navigate = useNavigate(); // Declare useNavigate at the top level

    // const handleGetStarted = () => {
    //     navigate('/tasks'); // Use navigate inside your handler function
    // };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Health Manager</h1>
                <p>Organize your tasks efficiently and boost productivity.</p>
                <button className="get-started-btn">
                    Get Started
                </button>
            </header>
            <div className="home-features">
                <div className="feature">
                    <h3>Easy Task Management</h3>
                    <p>Add, edit, and delete tasks effortlessly.</p>
                </div>
                <div className="feature">
                    <h3>Stay Organized</h3>
                    <p>Keep track of all your tasks in one place.</p>
                </div>
                <div className="feature">
                    <h3>Boost Productivity</h3>
                    <p>Focus on what matters and get more done.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
