import { React } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { CartCard } from "../../components/card/CartCard";
import { useCart } from "../../context";

const CartPage = () => {
  const {
    cartState: { itemsInCart },
  } = useCart();

  return (
    <div className="container">
      <Navbar />
      <div className="cart-section">
        <div className="category-header">
          <h2 className="headind2">Welcome to your Cart</h2>
        </div>
        <div className="cart-block">
          {itemsInCart?.length > 0 ? (
            itemsInCart.map((item) => <CartCard key={item._id} {...item} />)
          ) : (
            <h2 className="message">Oops, your cart is empty!!</h2>
          )}
          <div className="cart-total-section">
            <h2 className="heading2">Total Bill</h2>
            <div className="coupon-section">
              <h4>Coupon</h4>
              <div className="coupon-apply-section">
                <label>
                  {" "}
                  <i className="fa-solid fa-tag" /> Apply Coupons
                </label>
                <button className="apply-btn action-btn">Apply</button>
              </div>
              <div className="price-detail-section">
                <h4>Price Details</h4>
                <div className="pricing-detail mrp-section">
                  <h5 className="mrp">Total MRP</h5>
                  <h5 className="amount">Rs. 14999</h5>
                </div>
                <div className="pricing-detail discount-section">
                  <h5 className="discount-on-mrp">Discount on MRP</h5>
                  <h5 className="amount">Rs. 2999</h5>
                </div>
                <div className="pricing-detail coupon-discount-section">
                  <h5 className="coupon-discount">Coupon Discount</h5>
                  <h5 className="amount">Rs. 500</h5>
                </div>
                <div className="pricing-detail convenience-fee-section">
                  <h5 className="convenience-fee">Convenience Fee</h5>
                  <h5 className="amount">Rs. 99</h5>
                </div>
                <div className="pricing-detail total-amount-section">
                  <h4 className="total-amount">Total Amount</h4>
                  <h4 className="amount">Rs. 11598</h4>
                </div>
              </div>
            </div>
            <button className="secondary-btn order-place-btn">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { CartPage };
