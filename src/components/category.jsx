import { useProduts } from "../contex/products";

const categories = [
  {
    id: "electronics",
    label: "electronics",
  },
  {
    id: "jewelery",
    label: "jewelery",
  },
  {
    id: "men's clothing",
    label: "men's clothing",
  },
  {
    id: "women's clothing",
    label: "women's clothing",
  },
];

export const Category = ({ selectedCategory, setSelectedCategory }) => {
  const { fetchByCategory } = useProduts();

  const handleClick = (category) => {
    fetchByCategory(category.id);
    setSelectedCategory(category.id);
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          className={` px-4 py-2 rounded-lg  hover:bg-blue-500 hover:text-white ${
            selectedCategory === category.id
              ? "bg-blue-500 text-white"
              : "bg-blue-200 text-gray-700"
          }`}
          onClick={() => handleClick(category)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};
