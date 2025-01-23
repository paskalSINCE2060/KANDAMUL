import React, { useState } from "react";
import "./SignUp.css";

const SignUp = ({ navigateToLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Save user data to localStorage
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    // Reset form and navigate to login
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    setError("");
    alert("Account created successfully!");
    if (navigateToLogin) navigateToLogin(); // Ensure the function is passed before calling
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-label">
          Full Name:
          <input
            type="text"
            name="name"
            className="signup-input"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="signup-label">
          Email:
          <input
            type="email"
            name="email"
            className="signup-input"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className="signup-label">
          Password:
          <input
            type="password"
            name="password"
            className="signup-input"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label className="signup-label">
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            className="signup-input"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        {error && <p className="error-text">{error}</p>}
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <p className="login-text">
          Already have an account?{" "}
          <span
            className="login-link"
            style={{ cursor: "pointer", color: "blue" }}
            onClick={navigateToLogin}
          ><a href="/login" class="signup-link">Login</a>
            
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
