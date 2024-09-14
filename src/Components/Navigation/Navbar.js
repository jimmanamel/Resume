import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { navbarMapper } from "../Constants/constant";

import "./NavigationBar.scss";

const Navbar = ({ isNavBarOpen, isDesktop }) => {
  const [activeRoute, setActiveRoute] = useState("Home");

  const location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);


  const navItem = (navLink, navName) => {
    return (
      <span
        className={activeRoute === navLink ? "selected" : "unselected"}
        key={navLink + navName}
      >
        <Link to={navLink} onClick={() => setActiveRoute(navLink)}>
          {navName}
        </Link>
      </span>
    );
  };

  return (
    <nav className="navBar">
      {Object.keys(navbarMapper).map((navElement) =>
        isDesktop ? (
          navItem(navElement, navbarMapper[navElement])
        ) : (
          isNavBarOpen&&<div>{navItem(navElement, navbarMapper[navElement])}</div>
        )
      )}
    </nav>
  );
};

export default Navbar;
