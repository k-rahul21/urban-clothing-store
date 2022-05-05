export const CartCard = () => {
  return (
    <div class="horizontal-card shadow-card">
      <div class="card-image container-image">
        <img src="/assets/biker-jacket.avif" alt="jacket" />
        <span class="btn-dismiss">
          <i class="fa fa-close"></i>
        </span>
      </div>

      <div class="card-description">
        <h3 class="product-brand-name l-height">H&M</h3>
        <h5 class="product-name l-height">Black Leather Jacket</h5>
        <p class="product-description l-height">
          Sold by: H & M Retail Private Limited.
        </p>
        <div class="price-section">
          <h4 class="discounted-price">Rs. 4999</h4>
          <h4 class="original-price">Rs. 5999</h4>
        </div>
      </div>
    </div>
  );
};
