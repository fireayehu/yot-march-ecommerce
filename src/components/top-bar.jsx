import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <header className="flex justify-between items-center px-8 bg-white">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-20" />
      </Link>
      <nav className="flex gap-4 items-center">
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="text-gray-500 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/carts" className="text-gray-500 hover:text-blue-500">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="text-gray-500 hover:text-blue-500">
              Wishlist
            </Link>
          </li>
        </ul>
        <Link
          to="/register"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};
