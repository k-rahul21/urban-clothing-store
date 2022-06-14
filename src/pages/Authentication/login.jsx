import { React } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Login = () => {
  return (
    <div className="container">
      <div className="form login-form">
        <h1 className="heading2">Welcome to Urban Clothing</h1>
        <p className="heading3 welcome-msg">
          Welcome back, please enter your details
        </p>
        <label htmlFor="username" className="input-name">
          Username
        </label>
        <input
          type="text"
          className="username input-box"
          placeholder="Type your username"
          required
        />
        <label htmlFor="password" className="input-name">
          Password
        </label>
        <input
          type="password"
          className="password input-box"
          placeholder="Type your password"
          required
        />
        <Link className="forgot-password-link" to="#">
          Forgot password?
        </Link>
        <button className="secondary-btn">LOGIN</button>
        <Link className="action-btn sign-up-link" to="/Signup">
          Don't have an account? Signup
        </Link>
      </div>
    </div>
  );
};

export { Login };
