import { Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;
