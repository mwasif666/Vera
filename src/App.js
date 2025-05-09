import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import "./App.css";
import Product from "./Pages/Products";
import GentsServices from "./Pages/GentsServices";
import Services from "./Pages/Services";
import Footer from "./Pages/Footer";
import LadiesServices from "./Pages/LadiesServices";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/GentsServices" element={<GentsServices />} />
        <Route path="/LadiesServices" element={<LadiesServices />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
