import { useCart } from "../../context";

const CartPrice = (props) => {
  const { originalPrice, totalDiscount, priceAfterDiscount, totalPrice } =
    useCart();
  const getConvenienceFee = () => 99;
  return (
    <div className="cart-total-section">
      <h2 className="heading2">Total Bill</h2>
      <div className="coupon-section">
        <h4>Coupon</h4>
        <div className="coupon-apply-section">
          <label>
            <i className="fa-solid fa-tag" /> Apply Coupons
          </label>
          <button className="apply-btn action-btn">Apply</button>
        </div>
        <div className="price-detail-section">
          <h4>Price Details</h4>
          <div className="pricing-detail mrp-section">
            <h5 className="mrp">Total MRP</h5>
            <h5 className="amount">{originalPrice}</h5>
          </div>
          <div className="pricing-detail discount-section">
            <h5 className="discount-on-mrp">Discount on MRP</h5>
            <h5 className="amount">Rs. {totalDiscount}</h5>
          </div>
          <div className="pricing-detail coupon-discount-section">
            <h5 className="coupon-discount">Coupon Discount</h5>
            <h5 className="amount">Rs. 500</h5>
          </div>
          <div className="pricing-detail convenience-fee-section">
            <h5 className="convenience-fee">Convenience Fee</h5>
            <h5 className="amount">Rs. {getConvenienceFee}</h5>
          </div>
          <div className="pricing-detail total-amount-section">
            <h4 className="total-amount">Total Amount</h4>
            <h4 className="amount">Rs. {totalPrice}</h4>
          </div>
        </div>
      </div>
      <button className="secondary-btn order-place-btn">Place Order</button>
    </div>
  );
};

export { CartPrice };
