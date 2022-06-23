import { Link } from "react-router-dom";
import { useCart } from "../../context/index";
import "./navbar.css";

export const Navbar = () => {
  const { cartState } = useCart();
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
        <li className="list-item">
          <Link to="/Login">
            <i className="fa fa-regular fa-user onhover"></i>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/wishlist">
            <i className="fa fa-regular fa-heart onhover"></i>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/cart">
            <i className="fa fa-light fa-cart-shopping onhover"></i>
            <span className="navbar-item onhover">
              {cartState.itemsInCart.length}{" "}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
