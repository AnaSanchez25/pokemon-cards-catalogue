import logo from "./assets/International_Pokemon_logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./components/home.tsx";
import Catalog from "./components/Catalog.tsx";

// import React, { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <ul>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>{/* <Link to="">CATALOG</Link> */}</li>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <img src={logo}></img>
      </div>
    </div>
  );
}

export default App;
