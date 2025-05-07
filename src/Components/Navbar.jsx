import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";

function Navbar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="logo">
        <img src="./assets/images/logo/logo.png" alt="" />
      </div>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">My work</a>
        <a href="/#">Blog</a>
        <a href="/#">About me</a>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;
