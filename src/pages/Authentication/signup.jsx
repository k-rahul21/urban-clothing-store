import { React } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Signup = () => {
  return (
    <div className="container">
      <div className="form signup-form">
        <h1 className="heading2">Welcome to Urban Clothing</h1>
        <label htmlFor="username" className="input-name">
          Username
        </label>
        <input
          type="text"
          className="username input-box"
          placeholder="Type your name"
          required
        />
        <label htmlFor="email" className="input-name">
          Email
        </label>
        <input
          type="email"
          className="email input-box"
          placeholder="Type your email"
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
        <label htmlFor="repeat-password" className="input-name">
          Password
        </label>
        <input
          type="password"
          className="repeat-password input-box"
          placeholder="Type your password again"
          required
        />
        <Link to="/Login">Already have an account?</Link>
        <button className="secondary-btn signup-btn">Sign-Up</button>
      </div>
    </div>
  );
};

export { Signup };
