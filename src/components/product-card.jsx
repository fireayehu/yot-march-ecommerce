import { Link } from "react-router-dom";

export const ProductCard = (props) => {
  const { product } = props;
  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-white p-4 rounded-lg h-full">
        <img src={product.image} alt={product.title} className="w-full h-72" />
        <div className="pt-6 flex flex-col gap-4">
          <h2 className="font-bold text-2xl">{product.title}</h2>
          <div className="flex justify-between">
            <button className="bg-blue-200 px-4 py-2 rounded-full text-gray-700 text-sm">
              {product.category}
            </button>
            <h2 className="font-bold">{product.price} USD</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};
