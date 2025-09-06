import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { normalizeRoute } from "../Helper/helper";
import { Link } from "react-router-dom";

import { menuItems } from "../Constants/constant";

import "./SideBarMenu.scss";
import dp from "../../Images/Edited_blackshirt.webp";

const SidebarMenu = ({ activeRoute, setActiveRoute }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const changeRoute = (route) => {
    setActiveRoute(route);
    setOpen(false);
  };

  return (
    <div className="sidebar">
      <button className="sidebar__toggle" onClick={toggleMenu}>
        {open ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      <div className={`sidebar__drawer ${open ? "sidebar__drawer--open" : ""}`}>
        <div className="sidebar__header">
          <img
            src={dp}
            alt="profile"
            className="sidebar__profile-img"
            loading="lazy"
          />
          <div className="sidebar__profile-info">
            <h3 className="sidebar__name">Jim Joseph</h3>
            <p className="sidebar__role">Software Developer</p>
          </div>
        </div>
        <hr className="sidebar__divider" />

        <ul className="sidebar__menu">
          {menuItems.map((item) => {
            const isActive =
              normalizeRoute(activeRoute) === normalizeRoute(item.route);
            return (
              <li
                key={item.route}
                className={`sidebar__menu-item ${
                  isActive ? "sidebar__menu-item--active" : ""
                }`}
              >
                {item.icon}
                <Link
                  to={item.route}
                  onClick={() => changeRoute(item.route)}
                  className="sidebar__link"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
