import React, { useState } from "react";

import adminBG from '../../assets/adminBG.jpg'
import logo from '../../assets/footerLogo.png'

function AuthAdmin({ onLoginSuccess }) {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    // Helper function to set cookies
    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://kbk-broadcasting-backend.vercel.app/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: loginData.email,
                    password: loginData.password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("role", data.role);
                setCookie("role", data.role);
                alert("Login successful!");
                onLoginSuccess();
                setLoginData({ email: "", password: "" });
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message || "An error occurred"}`);
            }
        } catch (err) {
            alert(`An error occurred: ${err.message}`);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-transparent" style={{ backgroundImage: `url(${adminBG})` }}>
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex justify-center p-6 border-b">
                    <img src={logo} alt="Logo" className="w-44" />
                </div>
                <div className="p-6">
                    <h4 className="text-xl font-semibold text-center text-gray-800">Log In</h4>
                    <p className="text-sm text-gray-600 text-center mb-4">Enter your email and password to access the admin panel.</p>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={loginData.email}
                                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={loginData.password}
                                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-2 text-gray-600 hover:text-gray-800"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AuthAdmin;