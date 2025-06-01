import React, { useState } from 'react';
import './auth.css';
import { useNavigate } from 'react-router';
import './Chatbot'

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        if (email === "mooblings@gmail.com" && password === "1@Mooblings@1") {
        const usenavigate =  useNavigate();
        usenavigate(to= "/admin");
        
      } else {
        alert("Invalid credentials. Please try again.");
      }
    }
    
    return (
        <div className="login-container">
            <h1>Mooblings Chatbot Login</h1>
            <form id="login-form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required="" value={email} onChange={(e)=> setEmail(e.target.value) }/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={handleLogin}>Login</button>
            </form>
    </div>
    );
}

export default Auth;