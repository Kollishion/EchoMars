import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const [signedIn, setSignedIn] = useState(true);
  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout signedIn={signedIn} />} />
        <Route path="/checkoutSuccess" element={<OrderSuccess />} />
      </Routes>
    </>
  );
};

export default App;
