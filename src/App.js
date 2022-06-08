import { Routes, Route } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/Home-page/home-page";
import ProductListing from "./pages/product-listing/Product-Listing";
import Wishlist from "./pages/Wishlist-page/Wishlist";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/products" exact element={<ProductListing />} />
      <Route path="/wishlist" exact element={<Wishlist />} />
    </Routes>
  );
}

export default App;
