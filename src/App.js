import React from "react";
// import Logo from "./assets/logo.svg";
// import Body from "./components/layout/Body";
import NavBar from "./components/layout/NavBar";
import {
  // BrowserRouter,
  // Navigate,
  // Outlet,
  Route,
  // Router,
  Routes,
} from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./components/layout/Cart";

function App() {
  return (
    <>
      <NavBar />
      {/* <Cart /> */}
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
