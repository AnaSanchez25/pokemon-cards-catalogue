import Navbar from "./components/Navbar.tsx";
import Home from "./components/home.tsx";
import logo from "./assets/International_Pokemon_logo.png";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer></Footer>
    </>
  );
}

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <p>ABOUT</p>
        <p>CATALOG</p>
        <p>CHARACTERS</p>
        <p>CONTACT</p>
      </div>
      <div className="footer-logo">
        <img src={logo}></img>
      </div>
    </div>
  );
}

export default App;
