import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { navbarMapper } from "../Constants/constant";

import "./NavigationBar.scss";

const Navbar = ({ isNavBarOpen, setIsNavBarOpen, isDesktop }) => {
  const [activeRoute, setActiveRoute] = useState("Home");

  const location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const changeRoute=(navLink)=>{
    setActiveRoute(navLink)
    if(isNavBarOpen&&!isDesktop) setIsNavBarOpen(!isNavBarOpen)
  }

  const navItem = (navLink, navName) => {
    return (
      <span
        className={
          activeRoute === navLink
            ? "navBar__item selected"
            : "navBar__item unselected"
        }
        key={navLink + navName}
      >
        <Link to={navLink} onClick={()=>changeRoute(navLink)}>
          {navName}
        </Link>
      </span>
    );
  };

  return (
    <nav className="navBar">
      {isDesktop
        ? Object.keys(navbarMapper).map((navElement) =>
            navItem(navElement, navbarMapper[navElement])
          )
        : isNavBarOpen && (
            <div className="navBar__itemContainer">
              <div className="navBar__menuClose">
                <IoIosCloseCircleOutline
                  color="white"
                  size={35}
                  onClick={() => setIsNavBarOpen(!isNavBarOpen)}
                />
              </div>
              {Object.keys(navbarMapper).map((navElement) =>
                navItem(navElement, navbarMapper[navElement])
              )}
            </div>
          )}
    </nav>
  );
};

export default Navbar;
