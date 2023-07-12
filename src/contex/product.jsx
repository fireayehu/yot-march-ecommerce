import React, { useCallback, useContext, useMemo, useState } from "react";
import axios from "axios";

const ProductContext = React.createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const fetchProduct = useCallback(async (id) => {
    setLoading(true);
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(data);
    setLoading(false);
  }, []);

  const contextValue = useMemo(
    () => ({
      loading,
      product,
      fetchProduct,
    }),
    [loading, product, fetchProduct]
  );
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
