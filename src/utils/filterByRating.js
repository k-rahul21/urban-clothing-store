const getProductsWithSelectedRatings = (availableProducts, { rating }) => {
  if (rating) {
    return [...availableProducts].filter(
      (product) => Number(product.rating) >= Number(rating)
    );
  }
};
export { getProductsWithSelectedRatings };
