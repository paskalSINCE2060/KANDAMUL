import React, { useState } from "react";
import "./Login.css";

const Login = ({ navigateToSignup }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Get user data from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser || savedUser.email !== email) {
      setError("User not found! Please sign up.");
      return;
    }

    if (savedUser.password !== password) {
      setError("Incorrect password!");
      return;
    }

    setError("");
    alert("Login successful!");
    // Redirect to dashboard or home page here
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          Email:
          <input
            type="email"
            name="email"
            className="login-input"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className="login-label">
          Password:
          <input
            type="password"
            name="password"
            className="login-input"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        {error && <p className="error-text">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="signup-text">
          Don't have an account?{" "}
          <span
            className="signup-link"
            style={{ cursor: "pointer", color: "blue" }}
            onClick={navigateToSignup}
          ><a href="signup" class="signup-link">Sign up</a>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;












