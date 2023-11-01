import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showsidebar, setShowSidebar] = useState(false);

  const handleMenu = () => {
    setShowSidebar(!showsidebar);
    console.log("you clicked mer");
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <>
    {/* This is Navbar Header  */}
      <div className="nav-header">
        <div className="logo">
          <img src="/assets/logo.png" alt="" />
          <span className="logo-text">MachineTek</span>
        </div>
        <div className="call-and-email">
          <div className="call-div">
            <div className="call-icon">
              <IoIosCall className="ic" />
            </div>
            <div className="nav-num">
              <div>Call us anytime</div>
              <div className="silver">(+92) 423 792 8766</div>
            </div>
          </div>
          <div className="call-div">
            <div className="call-icon">
              <MdOutlineForwardToInbox className="ic" />
            </div>
            <div className="nav-num">
              <div>Send us a mail</div>
              <div className="silver">info@haroonengineering.pk</div>
            </div>
          </div>
        </div>
      </div>
         {/* This is navbar */}
      <div className="navbar-container">
        <Link to="/" className="nav-links-btn">
          <div>Home</div>
        </Link>
        <Link to="/about" className="nav-links-btn">
          <div>About</div>
        </Link>
        <Link to="/gallary" className="nav-links-btn">
          <div>Gallary</div>
        </Link>
        <Link to="/calientle" className="nav-links-btn">
          <div>Calientle</div>
        </Link>
        <Link to="/services" className="nav-links-btn">
          <div>Services</div>
        </Link>
        <Link to="/contact" className="nav-links-btn">
          <div>Contact</div>
        </Link>
      </div>

      {/* mobile navbar */}
      <div className="mobile-nav">
        <div className="m-logo">
          <img src="/assets/logo.png" className="m-logo-img" />
        </div>
        <div className="m-menu" onClick={handleMenu}>
          <GiHamburgerMenu className="menu-icon" />
        </div>
        <div className={`navbar-links ${showsidebar ? "active" : "notactive"}`}>
          <Link className="nav-links" to="/" onClick={closeSidebar}>
            Home
          </Link>
          <Link className="nav-links" to="/about" onClick={closeSidebar}>
            About
          </Link>
          <Link className="nav-links" to="/services" onClick={closeSidebar}>
            Services
          </Link>
          <Link className="nav-links" to="/gallary" onClick={closeSidebar}>
            Gallary
          </Link>
          <Link className="nav-links" to="/calientle" onClick={closeSidebar}>
            Calientile
          </Link>
          <Link className="nav-links" to="/contact" onClick={closeSidebar}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
