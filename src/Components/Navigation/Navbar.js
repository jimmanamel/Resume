import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { navbarMapper } from "../Constants/constant";

import "./NavigationBar.scss";

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState("Home");

  const location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const navItem = (navLink, navName) => {
    return (
      <span className={activeRoute === navLink ? "selected" : ""}>
        <Link to={navLink} onClick={() => setActiveRoute(navLink)}>
          {navName}
        </Link>
      </span>
    );
  };

  return (
    <nav className="navBar">
      {Object.keys(navbarMapper).map((navElement) =>
        navItem(navElement, navbarMapper[navElement])
      )}
    </nav>
  );
};

export default Navbar;
