import { React } from "react";
import { useCart } from "../../context/cart-context";
import "./Card.css";

export const Card = (props) => {
  const {
    state: { cart },
    dispatch,
  } = useCart();

  const {
    title,
    subtitle,
    discountedPrice,
    originalPrice,
    imgSrc,
    rating,
    id,
  } = props;

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
        <p className="product-description product-rating">{rating}⭐</p>
        <div className="price-section">
          <h5 className="discounted-price">Rs. {discountedPrice}</h5>
          <h5 className="original-price">Rs. {originalPrice}</h5>
        </div>
        <div className="card-cta">
          {cart?.some((p) => p.id === id) ? (
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: props,
                })
              }
              className="action-btn"
              style={{ width: "100%" }}
            >
              Remove From Cart
              <span className="btn-icon">
                <i className="fa-regular fa-heart" />
              </span>
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}
              className="secondary-btn"
              style={{ width: "100%" }}
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
