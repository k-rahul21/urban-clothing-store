import { useContext, createContext, useReducer } from "react";
import { prodFilterReducerFunc } from "../reducer/prodFilterReducerFunc";

const ProductFilterContext = createContext({});

const ProductFilterProvider = ({ children }) => {
  const defaultFilter = {
    sortBy: "HIGH_TO_LOW",
    rating: "3",
    categories: "",
    priceRange: 0,
    brands: [],
  };

  const [filterState, filterDispatch] = useReducer(
    prodFilterReducerFunc,
    defaultFilter
  );
  return (
    <ProductFilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

const useProductFilter = () => useContext(ProductFilterContext);

export { useProductFilter, ProductFilterProvider };
