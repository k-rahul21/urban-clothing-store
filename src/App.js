import { Routes, Route } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/Home-page/home-page";
import { ProductListing } from "./pages/product-listing/Product-Listing";
import { Wishlist } from "./pages/Wishlist-page/Wishlist";
import { Login } from "./pages/Authentication/login";
import { Signup } from "./pages/Authentication/signup";
import { Logout } from "./pages/Authentication/logout";
import { CartPage } from "./pages/Cart-page/Cart-Page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/products" exact element={<ProductListing />} />
        <Route path="/wishlist" exact element={<Wishlist />} />
        <Route path="/cart" exact element={<CartPage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/logout" exact element={<Logout />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
