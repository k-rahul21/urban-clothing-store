import { React } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { WishlistCard } from "../../components/card/WishlistCard";

import "./Wishlist.css";
import "../Home-page/home-page.css";

const Wishlist = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="wishlist-section">
        <div className="category-header">
          <h2 className="headind2">Your Wishlist</h2>
        </div>
        <div className="cart-block">
          <WishlistCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
