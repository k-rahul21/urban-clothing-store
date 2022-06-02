import { React } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Card } from "../../components/card/Card";
import { Footer } from "../../components/footer/Footer";
import Filter from "../../components/filter/Filter";

import "./Product-Listing.css";

const ProductListing = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="product-section">
        <Filter />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default ProductListing;
