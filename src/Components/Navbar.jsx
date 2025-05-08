import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="logo">
        {location.pathname === "/Products" ? (
          <img
            src="./assets/images/logo/logo2.png"
            alt="Logo for Products page"
          />
        ) : (
          <img src="./assets/images/logo/logo.png" alt="Main logo" />
        )}
      </div>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/#">Home</Link>
        <Link to="/#">Home</Link>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;
