import logo from "../assets/International_Pokemon_logo.png";
import { NavItems } from "./NavItems";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="nav-wrap">
        <div id="nav-container">
          <div className="main-logo">
        <div>
            <img src={logo} alt="Pokemon logo" className="pokemon-logo" />
        </div>
          </div>
          <div className={open ? "nav-link-wrap active" : "nav-link-wrap"}>
            <ul>
              {NavItems.map((Item, index) => {
                return (
                  <li key={index}>
                    <Link to={Item.url} className={Item.cName}>
                      <i className={Item.icon}></i>
                      {Item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hamburger-menu" onClick={handleClick}>
            <span className="material-symbols-rounded">
              {open ? "close" : "menu"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
