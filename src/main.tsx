import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";
import Menu from "./components/Navbar.tsx";
// import Layout from "./Layout/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Menu />
    <App />
  </StrictMode>
);
