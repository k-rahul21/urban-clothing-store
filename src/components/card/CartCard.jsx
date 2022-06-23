import { useCart } from "../../context/index";

const CartCard = (props) => {
  const {
    title,
    subtitle,
    discountedPrice,
    originalPrice,
    _id,
    imgSrc,
    productDescription,
  } = props;

  const { cartDispatch } = useCart();

  return (
    <div key={_id} className="horizontal-card shadow-card">
      <div className="card-image container-image">
        <img src={imgSrc} alt="jacket" />
        <span className="btn-dismiss">
          <i
            className="fa fa-close"
            onClick={() =>
              cartDispatch({ type: "REMOVE_FROM_CART", payload: _id })
            }
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
    </div>
  );
};

export { CartCard };
