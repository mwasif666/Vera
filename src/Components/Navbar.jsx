import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  // Define pages where icon should be white
  const whiteIconPages = ["/Services", "/LadiesServices", "/GentsServices"];
  const shouldShowWhiteIcon = whiteIconPages.includes(location.pathname);

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
        <Link to="/Services">Services</Link>
        {/* Add these if you have separate pages for Ladies and Gents services */}
        <Link to="/LadiesServices">Ladies Services</Link>
        <Link to="/GentsServices">Gents Services</Link>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <span className={shouldShowWhiteIcon ? "icon-white" : "icon-black"}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </span>
      </button>
    </header>
  );
}

export default Navbar;
