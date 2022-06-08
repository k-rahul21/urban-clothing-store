import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="leftNav">
        <Link to="/" className="brandname font-bold">
          Urban Clothing
        </Link>
      </div>
      <div className="mid-nav search-bar">
        <input type="text" placeholder="Search products" />
      </div>
      <ul className="right-nav list-non-bullet">
        <li>
          <Link to="/home">
            <i className="fa fa-regular fa-user onhover"></i>
          </Link>
          <Link to="/home" class="navbar-item">
            Guest
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <i className="fa fa-regular fa-heart onhover"></i>
            <span className="navbar-item onhover">Favourite</span>
          </Link>
        </li>
        <li>
          <Link to="/home">
            <i className="fa fa-light fa-cart-shopping onhover"></i>
            <span className="navbar-item onhover">Cart</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
