const getProductsWithSelectedPriceRange = (
  availableProducts,
  { priceRange }
) => {
  if (priceRange)
    return [...availableProducts].filter(
      (product) => Number(product.discountedPrice) <= Number(priceRange)
    );
  return availableProducts;
};

export { getProductsWithSelectedPriceRange };
