import { React } from "react";
import "./Card.css";

export const Card = (props) => {
  const { title, subtitle, discountedPrice, originalPrice, imgSrc, rating } =
    props;
  return (
    <div className="card">
      <div className="card-image container-image">
        <img src={imgSrc} alt={title} />
        <div className="badge">New</div>
        <span className="btn-wishlist">
          <i className="fa fa-heart" />
        </span>
      </div>
      <div className="card-description">
        <h4 className="product-name">{title}</h4>
        <p className="product-description">{subtitle}</p>
        <p className="product-description">{rating}⭐</p>
        <div className="price-section">
          <h5 className="discounted-price">Rs. {discountedPrice}</h5>
          <h5 className="original-price">Rs. {originalPrice}</h5>
        </div>

        <div className="card-cta">
          <button className="secondary-btn">
            Buy now
            <span className="btn-icon">
              <i className="fa fa-shopping-cart" />
            </span>
          </button>
          <button className="action-btn">
            Wishlist
            <span className="btn-icon">
              <i className="fa-regular fa-heart" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
