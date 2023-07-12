import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { ProductDetail } from "./pages/detail";
import { Cart } from "./pages/cart";
import { Wishlist } from "./pages/wishlist";
import { Register } from "./pages/register";
import { TopBar } from "./components/top-bar";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/wishlists" element={<Wishlist />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
