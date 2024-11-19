import React from "react";
import "../styles/Auth.css";

const Login: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Login</h1>
        <form className="auth-form">
          <input type="email" className="auth-input" placeholder="Email" required />
          <input type="password" className="auth-input" placeholder="Password" required />
          <button type="submit" className="auth-button">Login</button>
        </form>
        <div className="auth-footer">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
