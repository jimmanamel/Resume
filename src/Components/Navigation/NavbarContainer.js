import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { useMediaQueryContext } from "../../MediaQueryContext";
import Navbar from "./Navbar";

import "./NavigationBar.scss";
import { handleResumeDownload } from "../Helper/helper";

const NavbarContainer = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const { isDesktop } = useMediaQueryContext();

  const toggleMenu = () => setIsNavBarOpen(!isNavBarOpen);

  return (
    <div className="navContainer">
      {!isDesktop && (
        <div className="navContainer__menuButton">
        <HiOutlineMenuAlt2
          className="navContainer__toggle"
          onClick={toggleMenu}
          size={25}
        />
        </div>
      )}
      <Navbar isNavBarOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} isDesktop={isDesktop} />
      {isDesktop && (
        <div className="downloadIcon" onClick={handleResumeDownload}>
          <BsDownload size="2em" />
        </div>
      )}
    </div>
  );
};

export default NavbarContainer;
