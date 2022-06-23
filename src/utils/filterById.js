const FilterById = (id, products) => {
  return products.find((product) => product._id === id);
};

export { FilterById };
