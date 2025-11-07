import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  // Define pages where icon should be white
  const whiteIconPages = [
    "/",
    "/Services",
    "/LadiesServices",
    "/GentsServices",
  ];
  const shouldShowWhiteIcon = whiteIconPages.includes(location.pathname);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsNavOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
    setIsNavOpen(false);
  };

  // Close navbar when route changes
  useEffect(() => {
    closeNavbar();
  }, [location]);

  return (
    <header>
      <div className="logo">
        <Link to="/">
          {location.pathname === "/Products" ? (
            <img
              src="./assets/images/logo/2.png"
              alt="Logo for Products page"
            />
          ) : (
            <img src="./assets/images/logo/2.png" alt="Main logo" />
          )}
        </Link>
      </div>
      <nav ref={navRef}>
        <Link to="/" onClick={closeNavbar}>
          Home
        </Link>
        {/* <Link to="/Products" onClick={closeNavbar}>
          Products
        </Link> */}
        <Link to="/Services" onClick={closeNavbar}>
          Services
        </Link>
        <Link to="/Packages" onClick={closeNavbar}>
          Packages
        </Link>
      </nav>
      <div className="d-flex align-items-center gap-4">
        {/* <button className="btn btn-appoinment">Book Appointment</button> */}
        <button className="nav-btn" onClick={showNavbar}>
          <span className={shouldShowWhiteIcon ? "icon-white" : "icon-black"}>
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
