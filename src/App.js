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

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
