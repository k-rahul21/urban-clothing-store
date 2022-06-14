import { createContext, useContext, useReducer } from "react";
import { useProducts } from "./product-context";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { availableProducts } = useProducts();

  const [state, dispatch] = useReducer(cartReducer, {
    products: availableProducts,
    cart: [],
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
