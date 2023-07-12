import React, { useCallback, useContext, useMemo, useState } from "react";
import axios from "axios";
const ProductsContext = React.createContext();

export const useProduts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
    setLoading(false);
  }, []);

  const fetchByCategory = useCallback(async (category) => {
    setLoading(true);
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    setProducts(data);
    setLoading(false);
  }, []);

  const contextValue = useMemo(
    () => ({
      loading,
      products,
      fetchProducts,
      fetchByCategory,
    }),
    [loading, products, fetchProducts, fetchByCategory]
  );

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
