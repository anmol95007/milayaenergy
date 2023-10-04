import { useState } from "react";
import MenuBar2 from "../../Styles/MenuBar.css";
import { Link } from "react-router-dom";
import Milaya_logo from "../../Assets/images/Milaya_logo.png";

const MenuBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    // Close the About Us dropdown when Services is clicked
    if (isAboutUsOpen) {
      setIsAboutUsOpen(false);
    }
  };

  const toggleAboutUs = () => {
    setIsAboutUsOpen(!isAboutUsOpen);
    // Close the Services dropdown when About Us is clicked
    if (isServicesOpen) {
      setIsServicesOpen(false);
    }
  };

  const handleAboutUsMouseEnter = () => {
    setIsAboutUsOpen(true);
  };

  const handleAboutUsMouseLeave = () => {
    setIsAboutUsOpen(false);
  };

  const handleServicesMouseEnter = () => {
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesOpen(false);
  };

  const handleMenuItemClick = () => {
    setIsNavActive(false);
    setIsServicesOpen(false); // Close the Services dropdown when any menu item is clicked
  };

  return (
    <>
      <div style={{ marginTop: "4.4rem" }}>
        <header>
          <div className="logo">
            <img src={Milaya_logo} alt="Milaya logo image" />
          </div>
          <nav className={`menu ${isNavActive ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/" className="active" onClick={handleMenuItemClick}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="active" onClick={handleMenuItemClick}>
                  About
                </Link>
              </li>

              {/* <li
                onMouseEnter={handleAboutUsMouseEnter}
                onMouseLeave={handleAboutUsMouseLeave}
              >
                <a
                  to="#"
                  className={`sub-menu ${isAboutUsOpen ? "active" : ""}`}
                  onClick={toggleAboutUs}
                >
                  About us
                </a>
                {isAboutUsOpen && (
                  <ul className="sub-menu-items">
                    <li>
                      <Link to="/contact">Submenu Item 1</Link>
                    </li>
                    <li>
                      <Link to="#">Submenu Item 2</Link>
                    </li>
                    <li>
                      <Link to="#">Submenu Item 3</Link>
                    </li>
                  </ul>
                )}
              </li> */}
              {/* <li
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <Link
                  to="#"
                  className={`sub-menu ${isServicesOpen ? "active" : ""}`}
                  onClick={toggleServices}
                >
                  Services
                </Link>
                {isServicesOpen && (
                  <ul className="sub-menu-items">
                    <li>
                      <Link to="#">link1</Link>
                    </li>
                    <li>
                      <Link to="#">link2</Link>
                    </li>
                    <li>
                      <Link to="#">link3</Link>
                    </li>
                  </ul>
                )}
              </li> */}
              
              <li>
                <Link to="/" className="active" onClick={handleMenuItemClick}>
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={handleMenuItemClick}>
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="menu-toggle" onClick={toggleNav}>
            <i className="fa fa-bars" aria-hidden="true" style={{color:'#008ba6'}}></i>
          </div>
        </header>
      </div>
    </>
  );
};

export default MenuBar;
