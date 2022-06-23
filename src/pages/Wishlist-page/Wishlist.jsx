import { React } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { WishlistCard } from "../../components/card/WishlistCard";

import "./Wishlist.css";
import "../Home-page/home-page.css";
import { useWishlist } from "../../context";

const Wishlist = () => {
  const {
    wishlistState: { itemsInWishlist },
  } = useWishlist();

  return (
    <div className="container">
      <Navbar />
      <div className="wishlist-section">
        <div className="category-header">
          <h2 className="headind2">Your Wishlist</h2>
        </div>
        <div className="cart-block">
          {itemsInWishlist?.length > 0 ? (
            itemsInWishlist.map((item) => (
              <WishlistCard key={item._id} {...item} />
            ))
          ) : (
            <h2 className="message">Oops, go and shop!!</h2>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { Wishlist };
