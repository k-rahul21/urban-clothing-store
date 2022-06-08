const getSortedData = (availableProducts, { sortBy }) => {
  switch (sortBy) {
    case "LOW_TO_HIGH":
      return [...availableProducts].sort(
        (product1, product2) =>
          Number(product1.discountedPrice) - Number(product2.discountedPrice)
      );
    case "HIGH_TO_LOW":
      return [...availableProducts].sort(
        (product1, product2) =>
          Number(product2.discountedPrice) - Number(product1.discountedPrice)
      );
    default:
      return availableProducts;
  }
};

export { getSortedData };
