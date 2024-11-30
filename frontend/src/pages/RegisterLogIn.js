import React, { useState } from "react";
import axios from "axios";
import "./RegisterLogIn.css";

function RegisterLogIn() {
    const [isLogin, setIsLogin] = useState(true); // Track login/signup mode
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = isLogin ? "http://localhost:5001/login" : "http://localhost:5001/signup";

        // Only send email and password for login
        const payload = isLogin
            ? { email: formData.email, password: formData.password }
            : formData;

        try {
            const response = await axios.post(endpoint, payload, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.status === 200 || response.status === 201) {
                setMessage(isLogin ? "Login successful!" : "Signup successful! Please log in.");
                if (isLogin) {
                    localStorage.setItem("isLoggedIn", "true"); // Save login status
                    window.location.href = "/account"; // Redirect after login
                } else {
                    setIsLogin(true); // Switch to login mode after signup
                }
            }
        } catch (error) {
            setMessage(
                error.response?.data || (isLogin ? "Login failed. Try again." : "Signup failed. Try again.")
            );
        }
    };

    return (
        <div className="register-login">
            <h1>{isLogin ? "Log In" : "Sign Up"}</h1>
            <form onSubmit={handleSubmit}>
                {/* Signup Form Fields */}
                {!isLogin && (
                    <>
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Phone Number:
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </>
                )}

                {/* Login Form Fields */}
                {isLogin && (
                    <>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </>
                )}

                {/* Common Field: Password */}
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </label>

                <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
            </form>
            <p>
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                    type="button"
                    onClick={() => {
                        setIsLogin(!isLogin);
                        setMessage(""); // Clear previous messages
                    }}
                >
                    {isLogin ? "Sign Up" : "Log In"}
                </button>
            </p>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default RegisterLogIn;
