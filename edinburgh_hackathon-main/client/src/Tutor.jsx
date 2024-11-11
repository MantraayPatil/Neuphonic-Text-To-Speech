import React, { useState } from 'react';
import './Tutor.css';

const Tutor = () => {
    const [inputText, setInputText] = useState('');
    const [isListening, setIsListening] = useState(false);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSpeechInput = () => {
        const recognition = new window.SpeechRecognition() || new window.webkitSpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setInputText(transcript);
            setIsListening(false);
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error: ", event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start();
    };

    const handleSend = () => {
        if (inputText.trim()) {
            console.log("User input:", inputText);
            setInputText('');
        }
    };

    return (
        <div className="tutor-container">
            <h2>Tutor Chat</h2>
            <div className="input-container">
                <input 
                    type="text"
                    placeholder="Type your message here"
                    value={inputText}
                    onChange={handleInputChange}
                    className="text-input"
                />
                <button onClick={handleSpeechInput} className="speech-btn" disabled={isListening}>
                    {isListening ? "Listening..." : "🎤"}
                </button>
                <button onClick={handleSend} className="send-btn">
                    Send
                </button>
            </div>
        </div>
    );
};

export default Tutor;
