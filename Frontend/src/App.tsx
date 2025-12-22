import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import ProductListing from './components/ProductListing';
import Checkout from './pages/Checkout';

const App = () => {
  const [signedIn, setSignedIn] = useState(true);
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout signedIn={signedIn} />} />
      </Routes>
    </>
  );
};

export default App;
