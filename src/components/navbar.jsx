export const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="left-nav">
        <a href="#" class="brandname font-bold">
          Urban Clothing
        </a>
      </div>
      <div class="mid-nav search-bar">
        <input type="text" placeholder="Search products" />
      </div>
      <ul class="right-nav list-non-bullet">
        <li>
          <a href="/pages/login.html">
            <i class="fa fa-regular fa-user onhover"></i>
          </a>
          <a href="/pages/login.html" class="navbar-item">
            Guest
          </a>
        </li>
        <li>
          <a href="/pages/wishlist.html">
            <i class="fa fa-regular fa-heart onhover"></i>
            <span class="navbar-item onhover">Favourite</span>
          </a>
        </li>
        <li>
          <a href="/pages/cart.html">
            <i class="fa fa-light fa-cart-shopping onhover"></i>
            <span class="navbar-item onhover">Cart</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
