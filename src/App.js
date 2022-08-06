import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import data from "./data.js";

import Navigation from "./components/Navigation";
import Home from "./components/Home/Home.js";
import Music from "./components/Music/Music.js";
import Sports from "./components/Sports/Sports.js";
import Tech from "./components/Tech/Tech.js";
import Cart from "./components/Cart/cart.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartitems] = useState([]);

  const handleAdd = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist) {
      setCartitems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartitems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemove = (product) => {
    let ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist.quantity === 1) {
      setCartitems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartitems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleClear = () => {
    setCartitems([]);
  };

  return (
    <div className="App">
      <div className="upper">
        <Router>
          <Navigation cartItems={cartItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/music"
              element={<Music itemData={data.music} handleAdd={handleAdd} />}
            />
            <Route
              path="/sports"
              element={<Sports itemData={data.sports} handleAdd={handleAdd} />}
            />
            <Route
              path="/tech"
              element={<Tech itemData={data.tech} handleAdd={handleAdd} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  items={cartItems}
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                  handleClear={handleClear}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
