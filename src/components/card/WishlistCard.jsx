import { React } from "react";
import "./WishlistCard.css";

export const WishlistCard = () => {
  return (
    <div className="horizontal-card shadow-card">
      <div className="card-image container-image">
        <img src="/assets/demin-jacket.avif" alt="jacket" />
        <span className="btn-dismiss">
          <i className="fa fa-close" />
        </span>
      </div>
      <div className="card-description">
        <h3 className="product-brand-name l-height">Zara</h3>
        <h5 className="product-name l-height">Denim Jacket</h5>
        <p className="product-description l-height">
          Sold by: Zara Private Limited.
        </p>
        <div className="price-section">
          <h4 className="discounted-price">Rs. 4999</h4>
          <h4 className="original-price">Rs. 5999</h4>
        </div>
      </div>
      <button className="secondary-btn">MOVE TO BAG</button>
    </div>
  );
};
