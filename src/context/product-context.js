import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";

const ProductContext = createContext({});

const ProductProvider = ({ children }) => {
  const [availableProducts, setAvailableProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const productsData = await axios.get("/api/products");
        if (productsData.status === 200)
          setAvailableProducts(productsData.data.products);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);
  return (
    <ProductContext.Provider value={{ availableProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
