export const CartCard = () => {
  return (
    <div className="horizontal-card shadow-card">
      <div className="card-image container-image">
        <img src="/assets/biker-jacket.avif" alt="jacket" />
        <span className="btn-dismiss">
          <i className="fa fa-close" />
        </span>
      </div>
      <div className="card-description">
        <h3 className="product-brand-name l-height">H&amp;M</h3>
        <h5 className="product-name l-height">Black Leather Jacket</h5>
        <p className="product-description l-height">
          Sold by: H &amp; M Retail Private Limited.
        </p>
        <div className="price-section">
          <h4 className="discounted-price">Rs. 4999</h4>
          <h4 className="original-price">Rs. 5999</h4>
        </div>
      </div>
    </div>
  );
};
