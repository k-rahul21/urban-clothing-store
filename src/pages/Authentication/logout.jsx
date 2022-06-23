import { React } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Logout = () => {
  return (
    <div class="container">
      <div className="logout-container">
        <p className="logout-msg">
          You have been logged out. Click below to login
        </p>
        <Link to="/Login" className="secondary-btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export { Logout };
