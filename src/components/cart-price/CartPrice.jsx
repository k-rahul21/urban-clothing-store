import { useCart } from "../../context";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartPrice = () => {
  const {
    cartState: { itemsInCart },
  } = useCart();
  const [originalPrice, setOriginalPrice] = useState();
  const [discountedPrice, setDiscountedPrice] = useState();
  const [isCouponApply, setIsCouponApply] = useState(false);
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    setOriginalPrice(
      itemsInCart.reduce(
        (acc, curr) => acc + Number(curr.originalPrice) * curr.qty,
        0
      )
    );
    setDiscountedPrice(
      itemsInCart.reduce(
        (acc, curr) => acc + Number(curr.discountedPrice) * curr.qty,
        0
      )
    );
    setQuantity(itemsInCart.reduce((acc, curr) => acc + Number(curr.qty), 0));
  }, [itemsInCart]);

  const priceAfterDiscount = originalPrice - discountedPrice;
  const getConvenienceFee = 99;
  const totalAmount = discountedPrice + getConvenienceFee;
  const couponValue = 500;

  const couponHandler = () => {
    if (isCouponApply === false) {
      setIsCouponApply((isCouponApply) => !isCouponApply);
      toast.success("Coupon Applied.");
    } else if (isCouponApply === true) {
      setIsCouponApply((isCouponApply) => !isCouponApply);
      toast.error("Removed Coupon.");
    }
  };

  return (
    <div className="cart-total-section">
      <h2 className="heading2">Total Bill</h2>
      <div className="coupon-section">
        <h4>Coupon</h4>
        <div className="coupon-apply-section">
          <label>
            <i className="fa-solid fa-tag" /> Apply Coupons
          </label>
          <button className="apply-btn action-btn" onClick={couponHandler}>
            Apply
          </button>
        </div>
        <div className="price-detail-section">
          <h4>Price Details ({quantity} Items)</h4>
          <div className="pricing-detail mrp-section">
            <h5 className="mrp">Total MRP</h5>
            <h5 className="amount">Rs. {originalPrice}</h5>
          </div>
          <div className="pricing-detail discount-section">
            <h5 className="discount-on-mrp">Discount on MRP</h5>
            <h5 className="amount">Rs. {priceAfterDiscount}</h5>
          </div>
          <div className="pricing-detail coupon-discount-section">
            <h5 className="coupon-discount">Coupon Discount</h5>
            <h5 className="amount">Rs. {isCouponApply ? 500 : 0}</h5>
          </div>
          <div className="pricing-detail convenience-fee-section">
            <h5 className="convenience-fee">Convenience Fee</h5>
            <h5 className="amount">Rs. {getConvenienceFee}</h5>
          </div>
          <div className="pricing-detail total-amount-section">
            <h4 className="total-amount">Total Amount</h4>
            <h4 className="amount">
              Rs.
              {isCouponApply ? totalAmount - couponValue : totalAmount}
            </h4>
          </div>
        </div>
      </div>
      <button className="secondary-btn order-place-btn">Place Order</button>
    </div>
  );
};

export { CartPrice };
