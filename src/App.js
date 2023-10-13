import { useState } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "../src/pages/HomePage";
import ProductDetails from "../src/pages/ProductDetails.jsx";
import ContactUs from "../src/pages/ContactUs";
import Navbar from "../src/components/Navbar";
import Drawer from "../src/components/Drawer";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {
  const [favorites, setFavorites] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [drawer, setDrawer] = useState(false);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <Navbar setDrawer={setDrawer} cartCount={cartCount} />
          <Drawer drawer={drawer} setDrawer={setDrawer} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/product/:id"
              element={<ProductDetails setCartCount={setCartCount} />}
            />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
