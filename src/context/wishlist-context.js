import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "../reducer/wishlistReducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, {
    itemsInWishlist: [],
  });
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {" "}
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
