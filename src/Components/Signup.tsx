import React from "react";
import "../styles/Auth.css";

const Signup: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Sign Up</h1>
        <form className="auth-form">
          <input type="text" className="auth-input" placeholder="Full Name" required />
          <input type="email" className="auth-input" placeholder="Email" required />
          <input type="password" className="auth-input" placeholder="Password" required />
          <input type="password" className="auth-input" placeholder="Confirm Password" required />
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <div className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
