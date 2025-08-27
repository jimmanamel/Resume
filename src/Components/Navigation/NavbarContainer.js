import { useState } from "react";
import { useMediaQueryContext } from "../../MediaQueryContext";
import Navbar from "./Navbar";
import SidebarMenu from "./SideBarMenu";

const NavbarContainer = () => {
  const [activeRoute, setActiveRoute] = useState("Resume/");
  const { isDesktop } = useMediaQueryContext();

  const commonProps = { activeRoute, setActiveRoute };

  return isDesktop ? <Navbar {...commonProps} /> : <SidebarMenu {...commonProps} />;
};

export default NavbarContainer;
