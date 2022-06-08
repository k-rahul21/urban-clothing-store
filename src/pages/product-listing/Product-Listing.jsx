import { React } from "react";
import { useProducts } from "../../context/product-context";
import { useProductFilter } from "../../context/product-filter-context";
import { Navbar } from "../../components/navbar/navbar";
import { Card } from "../../components/card/Card";
import { Footer } from "../../components/footer/footer";
import Filter from "../../components/filter/Filter";
import {
  getProductsWithSelectedBrands,
  getProductsWithSelectedCategory,
  getProductsWithSelectedPriceRange,
  getProductsWithSelectedRatings,
  getSortedData,
} from "../../utils/index";

import "./Product-Listing.css";

const ProductListing = () => {
  const { availableProducts } = useProducts();
  const { filterState } = useProductFilter();

  let filteredProducts = getSortedData(availableProducts, filterState);

  filteredProducts = getProductsWithSelectedRatings(
    filteredProducts,
    filterState
  );

  filteredProducts = getProductsWithSelectedCategory(
    filteredProducts,
    filterState.categories
  );

  filteredProducts = getProductsWithSelectedPriceRange(
    filteredProducts,
    filterState
  );

  filteredProducts = getProductsWithSelectedBrands(
    filteredProducts,
    filterState.brands
  );

  return (
    <div className="container">
      <Navbar />
      <div className="product-section">
        <Filter />
        <div className="product-container">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map((item) => <Card key={item.id} {...item} />)
          ) : (
            <h2 className="message">
              Oops! There are no products with that filter on!
            </h2>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListing;
