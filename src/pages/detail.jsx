import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../contex/product";
import ClockLoader from "react-spinners/ClockLoader";

export const ProductDetail = () => {
  const params = useParams();
  const { loading, product, fetchProduct } = useProduct();
  console.log(product);

  useEffect(() => {
    fetchProduct(params.id);
  }, [params.id]);

  if (loading || !product) {
    return (
      <div className="flex  m-8 mt-24  justify-center items-center h-40">
        <ClockLoader color="rgb(59 130 246 / var(--tw-bg-opacity)" />
      </div>
    );
  }

  return (
    <div className="flex flex-grow m-8 bg-white p-16 rounded-lg md:flex-row md:mx-32 flex-col gap-16">
      <div className="md:w-1/3">
        <img src={product.image} alt="product" className="w-full" />
      </div>
      <div className="flex md:w-2/3 flex-col gap-6">
        <h4 className="text-xl font-bold text-blue-500 uppercase">
          {product.category}
        </h4>
        <h2 className="text-xl uppercase font-semibold">{product.title}</h2>
        <h1 className="text-3xl font-bold text-blue-500">
          {product.price} USD
        </h1>
        <p className=" text-gray-600">{product.description}</p>
        <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
