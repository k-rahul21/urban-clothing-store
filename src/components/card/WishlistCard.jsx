import { React } from "react";
import { useCart, useWishlist } from "../../context/index";
import "./WishlistCard.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FilterById } from "../../utils";

export const WishlistCard = (props) => {
  const {
    title,
    subtitle,
    discountedPrice,
    originalPrice,
    _id,
    imgSrc,
    productDescription,
  } = props;

  const { cartState, cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const navigate = useNavigate();

  const isInCart = FilterById(_id, cartState.itemsInCart);

  const cartHandler = (product) => {
    if (isInCart) {
      navigate("/cart");
    } else {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
      toast.success("Item successfully added to cart.");
    }
  };

  return (
    <div key={_id} className="horizontal-card shadow-card">
      <div className="card-image container-image">
        <img src={imgSrc} alt="jacket" />
        <span className="btn-dismiss">
          <i
            className="fa fa-close"
            onClick={() => {
              toast.success("Item successfully removed from the wishlist.");
              wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: _id });
            }}
          />
        </span>
      </div>
      <div className="card-description">
        <h3 className="product-brand-name l-height">{title}</h3>
        <h5 className="product-name l-height">{subtitle}</h5>
        <p className="product-description l-height">
          Sold by: {productDescription}
        </p>
        <div className="price-section">
          <h4 className="discounted-price">Rs. {discountedPrice}</h4>
          <h4 className="original-price">Rs. {originalPrice}</h4>
        </div>
      </div>
      <button
        style={{ margin: "0", width: "100%" }}
        className="secondary-btn"
        onClick={() => cartHandler(props)}
      >
        {isInCart ? "Go to cart" : "Add to cart"}
      </button>
    </div>
  );
};
