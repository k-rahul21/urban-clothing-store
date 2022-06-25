import { React } from "react";
import { useCart, useWishlist } from "../../context/index";
import { FilterById } from "../../utils";
import { toast } from "react-toastify";

import "./Card.css";
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const navigate = useNavigate();

  const {
    title,
    subtitle,
    discountedPrice,
    originalPrice,
    imgSrc,
    rating,
    _id,
  } = props;

  const isInCart = FilterById(_id, cartState.itemsInCart);

  const cartHandler = (id, product) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    toast.success("Item successfully added To cart.");
  };

  const isInWishlist = FilterById(_id, wishlistState.itemsInWishlist);

  const wishlistHandler = (id, product) => {
    wishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
    toast.success("Item successfully added to wishlist.");
  };

  return (
    <div key={_id} className="card">
      <div className="card-image container-image">
        <img src={imgSrc} alt={title} />
        <div className="badge">New</div>
        <span className="btn-wishlist">
          <i
            style={{ color: isInWishlist ? "red" : "black" }}
            className="fa fa-heart"
            onClick={() => wishlistHandler(_id, props)}
          />
        </span>
      </div>
      <div className="card-description">
        <h4 className="product-name">{title}</h4>
        <p className="product-description">{subtitle}</p>
        <p className="product-description product-rating">{rating}⭐</p>
        <div className="price-section">
          <h5 className="discounted-price">Rs. {discountedPrice}</h5>
          <h5 className="original-price">Rs. {originalPrice}</h5>
        </div>
        <div className="card-cta">
          {isInCart ? (
            <button
              className="secondary-btn"
              style={{ width: "100%" }}
              onClick={() => navigate("/cart")}
            >
              Go to cart
              <span className="btn-icon">
                <i className="fa fa-shopping-cart" />
              </span>
            </button>
          ) : (
            <button
              className="secondary-btn"
              style={{ width: "100%" }}
              onClick={() => cartHandler(_id, props)}
            >
              Add to Cart
              <span className="btn-icon">
                <i className="fa fa-shopping-cart" />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
