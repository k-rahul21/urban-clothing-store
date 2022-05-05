export const Card = () => {
  return (
    <div class="card">
      <div class="card-image container-image">
        <img src="/assets/bomber-jacket.avif" alt="product" />
        <span class="btn-dismiss">
          <i class="fa fa-close"></i>
        </span>
      </div>

      <div class="card-description">
        <h4 class="product-name">product</h4>
        <p class="product-description">product name</p>
        <div class="price-section">
          <h5 class="discounted-price">Rs. 4999</h5>
          <h5 class="original-price">Rs. 5999</h5>
        </div>

        <div class="card-cta">
          <button class="secondary-btn">
            Buy now
            <span class="btn-icon">
              <i class="fa fa-shopping-cart"></i>
            </span>
          </button>
          <button class="action-btn">
            Wishlist
            <span class="btn-icon">
              <i class="fa-regular fa-heart"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
