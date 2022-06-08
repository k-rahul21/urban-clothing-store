const prodFilterReducerFunc = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "HIGH_TO_LOW":
      return { ...state, sortBy: payload.sortBy };

    case "LOW_TO_HIGH":
      return { ...state, sortBy: payload.sortBy };

    case "RATING":
      return { ...state, rating: payload.rating };

    case "CATEGORIES":
      if (payload.isSelected) {
        return {
          ...state,
          categories: [...state.categories, payload.categoryName],
        };
      } else {
        return {
          ...state,
          categories: state.categories.filter(
            (item) => item !== payload.categoryName
          ),
        };
      }

    case "BRANDS":
      if (payload.isSelected) {
        return {
          ...state,
          brands: [...state.brands, payload.brand],
        };
      } else {
        return {
          ...state,
          brands: state.brands.filter((item) => item !== payload.brand),
        };
      }

    case "PRICE_RANGE_FILTER": {
      return { ...state, priceRange: payload.priceRange };
    }

    case "CLEAR_FILTERS": {
      return {
        ...state,
        sortBy: "",
        rating: "",
        categories: [],
        priceRange: 0,
        brands: [],
        genderSelect: [],
      };
    }

    default:
      return state;
  }
};

export { prodFilterReducerFunc };
