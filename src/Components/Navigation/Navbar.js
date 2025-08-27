import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../Constants/constant";
import { normalizeRoute, handleResumeDownload } from "../Helper/helper";
import { BsDownload } from "react-icons/bs";
import "./Navbar.scss";

const Navbar = ({ activeRoute, setActiveRoute }) => {
  const location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname, setActiveRoute]);

  return (
    <div className="navbar">
      <nav className="navbar__list">
        {menuItems.map(({ route, label }) => {
          const isActive =
            normalizeRoute(activeRoute) === normalizeRoute(route);

          return (
            <span
              className={`navbar__item ${isActive && "navbar__item--selected"}`}
              key={route + label}
            >
              <Link
                to={route}
                onClick={() => setActiveRoute(route)}
                className="navbar__link"
              >
                {label}
              </Link>
            </span>
          );
        })}
      </nav>

      <div className="navbar__icon" onClick={handleResumeDownload}>
        <BsDownload size="2em" />
      </div>
    </div>
  );
};

export default Navbar;
