export const Card = () => {
  return (
    <div className="card">
      <div className="card-image container-image">
        <img src="/assets/bomber-jacket.avif" alt="product" />
        <span className="btn-dismiss">
          <i className="fa fa-close" />
        </span>
      </div>
      <div className="card-description">
        <h4 className="product-name">product</h4>
        <p className="product-description">product name</p>
        <div className="price-section">
          <h5 className="discounted-price">Rs. 4999</h5>
          <h5 className="original-price">Rs. 5999</h5>
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
