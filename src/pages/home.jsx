import { useEffect, useState } from "react";
import { Category } from "../components/category";
import { ProductCard } from "../components/product-card";
import { useProduts } from "../contex/products";
import ClockLoader from "react-spinners/ClockLoader";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { loading, products, fetchProducts } = useProduts();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-10 lg:px-16 flex flex-col gap-16">
      <Category
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="flex flex-col gap-10">
        <h4 className="text-xl font-bold">Products</h4>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <ClockLoader color="rgb(59 130 246 / var(--tw-bg-opacity)" />
          </div>
        ) : (
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
