import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { menuItems } from "../Constants/constant";

import { normalizeRoute } from "../Helper/helper";
import { handleResumeDownload } from "../Helper/helper";
import { BsDownload } from "react-icons/bs";

import "./Navbar.scss";

const Navbar = ({ activeRoute, setActiveRoute }) => {
  const location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location, setActiveRoute]);


  return (
    <div className="navContainer">
      <nav className="navBar">
      {menuItems.map((item) => (
          <span
            className={
              normalizeRoute(activeRoute) === normalizeRoute(item.route)
                ? "navBar__item selected"
                : "navBar__item unselected"
            }
            key={item.route + item.label}
          >
            <Link to={item.route} onClick={() => setActiveRoute(item.route)}>
              {item.label}
            </Link>
          </span>
        ))}
    </nav>
      <div className="downloadIcon" onClick={handleResumeDownload}>
        <BsDownload size="2em" />
      </div>
    </div>
  );
};

export default Navbar;
