const getProductsWithSelectedBrands = (availableProducts, brands) => {
  if (brands.length > 0)
    return availableProducts.filter((product) =>
      brands.includes(product.brand)
    );
  return availableProducts;
};

const getProductsWithSelectedCategory = (availableProducts, categories) => {
  if (categories.length > 0)
    return availableProducts.filter((product) =>
      categories.includes(product.categoryName)
    );
  return availableProducts;
};

export { getProductsWithSelectedBrands, getProductsWithSelectedCategory };
