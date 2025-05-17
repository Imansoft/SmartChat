import React from 'react';
import './Chatbot.css';
import { Circle, Mic, Send, WifiZero } from 'lucide-react';
import react from "./assets/react.svg";

function Chatbot() {
    return (
        <>
            <div className="logo">
                <img src={react} alt="react" />
                React
            </div>
            <div className='chat_bot_container'>
                <div className="chat_top">
                    <div className="profile">AI</div>
                    <div className="name_nd_status">
                        <div className="name">ChatAssistant</div>
                        <div className="status"><div className="dot"></div> Online</div>
                    </div>
                </div>
                <div className="chat_container"></div>
                <div className="chat_bottom">
                    <button className="mic_btn"><Mic/></button>
                    <input type="text" name="" id="" placeholder='Type your message here...'/>
                    <button className='send_btn'> <Send/> </button>
                </div>
            </div>
        </>
    );
}

export default Chatbot;