import { React, useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { CartCard } from "../../components/card/CartCard";
import { useCart } from "../../context";
import { CartPrice } from "../../components/cart-price/CartPrice";
import { emptyCart } from "../../assets";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    cartState: { itemsInCart },
  } = useCart();

  const navigate = useNavigate();

  return (
    <div className="container">
      <Navbar />
      <div className="cart-section">
        <div className="category-header">
          <h2 className="headind2">Welcome to your Cart </h2>
        </div>
        <section className="cart-block">
          {itemsInCart?.length > 0 ? (
            itemsInCart.map((item) => <CartCard key={item._id} {...item} />)
          ) : (
            <div>
              <img
                src={emptyCart}
                className="responsive-img"
                style={{ width: "50%" }}
              />
              <h2 className="message">
                Looks like you haven't made your choice yet. Go ahead & explore
                top products.
              </h2>
              <button
                className="secondary-btn"
                onClick={() => navigate("/products")}
              >
                SHOP NOW
              </button>
            </div>
          )}
          {itemsInCart?.length > 0 && <CartPrice />}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export { CartPage };
