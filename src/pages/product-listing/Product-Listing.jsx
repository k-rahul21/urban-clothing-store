import { React } from "react";
import { useProducts } from "../../context/product-context";
import { Navbar } from "../../components/navbar/Navbar";
import { Card } from "../../components/card/Card";
import { Footer } from "../../components/footer/Footer";
import Filter from "../../components/filter/Filter";

import "./Product-Listing.css";

const ProductListing = () => {
  const { availableProducts } = useProducts();
  return (
    <div className="container">
      <Navbar />
      <div className="product-section">
        <Filter />
        <div className="product-container">
          {availableProducts.map((item) => (
            <Card key={item.id} {...item} />
          ))}
          ;
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListing;
