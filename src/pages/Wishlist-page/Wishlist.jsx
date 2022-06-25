import { React } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { WishlistCard } from "../../components/card/WishlistCard";
import { useWishlist } from "../../context";
import { emptyWishlist } from "../../assets";
import "./Wishlist.css";
import "../Home-page/home-page.css";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const {
    wishlistState: { itemsInWishlist },
  } = useWishlist();

  const navigate = useNavigate();

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
            <div>
              <img
                src={emptyWishlist}
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { Wishlist };
