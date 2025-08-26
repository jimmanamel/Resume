import React, { useState } from "react";
import "./SideBarMenu.scss";
import dp from "../../Images/Edited_blackshirt.png";
import { FiMenu, FiX} from "react-icons/fi";
import { normalizeRoute } from "../Helper/helper";
import { Link } from "react-router-dom";
import { menuItems } from "../Constants/constant";

const SidebarMenu = ({ activeRoute, setActiveRoute }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="sidebar-wrapper">
      <button className="menu-toggle" onClick={toggleMenu}>
        {open ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <img
            src={dp}
            alt="profile"
            className="profile-img"
          />
          <div className="profile-info">
            <h3>Jim Joseph</h3>
            <p>Software Developer</p>
          </div>
        </div>
        <hr/>

       <ul className="menu">
  {menuItems.map(item => (
    <li
      key={item.route}
      className={normalizeRoute(activeRoute) === normalizeRoute(item.route) ? "active" : ""}
    >
      {item.icon}
      <Link to={item.route} onClick={() => setActiveRoute(item.route)}>
        {item.label}
      </Link>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
