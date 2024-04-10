import React, { useState } from "react";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (email.trim() === '' || password.trim() === '') {
            setErrorMessage('Please enter both email and password');
            return;
        }

    };

    return (
        <div className="login-container">
            <div className="login-form">
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
