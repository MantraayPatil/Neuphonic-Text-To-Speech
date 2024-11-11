import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Tutor from './Tutor'; // Ensure Courses component exists

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Tutor />} />
            </Routes>
        </Router>
    );
};

export default App;
