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

  function routeUpdate(navLink){
    if(navLink==="/Projects")document.body.style.backgroundColor="#F1F1F1"
    else document.body.style.backgroundColor=""
    setActiveRoute(navLink)
  }

  const navItem = (navLink, navName) => {
    return (
      <span className={activeRoute === navLink ? "selected" : "unselected"} key={navLink+navName}>
        <Link to={navLink} onClick={() => routeUpdate(navLink)}>
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
