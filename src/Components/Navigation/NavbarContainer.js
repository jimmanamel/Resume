import { useState } from "react";

import { useMediaQueryContext } from "../../MediaQueryContext";
import Navbar from "./Navbar";

import SidebarMenu from "./SideBarMenu";

const NavbarContainer = () => {
  const [activeRoute, setActiveRoute] = useState("Resume/");

  const { isDesktop } = useMediaQueryContext();

  return isDesktop ? (
    <Navbar activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
  ) : (
    <SidebarMenu activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
  );
};

export default NavbarContainer;
