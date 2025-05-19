import React, { useState } from 'react';
import './Chatbot.css';
import { Circle, Mic, Send, WifiZero } from 'lucide-react';
import react from "./assets/react.svg";

function Chatbot() {
    const [messages, setMessages] = useState([
        {'id' : 1, "message" : "Hello!, How can I help you today?", 'sender':"bot"},
    ]);

    const [inputValue, setInputValue] = useState("");

    function sendMessage(){
        if(inputValue.trim() === "")
            return;

       const newMessages = ([
        ...messages,
        {'id': messages.length + 1, "message": inputValue, "sender":"user"},
       ]);
       setMessages(newMessages);
       setInputValue("");

       setTimeout(() => {
        setMessages([
            ...newMessages,
            {'id': messages.length + 1, "message": "I received your message. This is a simulated response.", "sender":"bot"},
        ]);
        
       }, 1000);
    }

    const HandlekeyPressed = (e) => {
        if(e.key === 'Enter'){
            sendMessage();
        }
    }

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
                <div className="chat_container">
                    {messages.map((message,id) => (
                        <div key={id} className={message.sender}>
                        <p>{message.message}</p>
                    </div>
                    ))}
                    {/* <div className="bot">
                        <p>Hello!, How can I help you today?</p>
                    </div>
                    <div className="user">
                        <p>Hello!, How can I help you today?</p>
                    </div> */}
                </div>
                <div className="chat_bottom">
                    <button className="mic_btn"><Mic/></button>
                    <input type="text" name="" id="" className="user_input" placeholder='Type your message here...' onChange={(e)=>{setInputValue(e.target.value)}} value={inputValue} onKeyDown={HandlekeyPressed}/>
                    <button className='send_btn' onClick={sendMessage}> <Send/> </button>
                </div>
            </div>
        </>
    );
}

export default Chatbot;