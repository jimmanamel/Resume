import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { useMediaQueryContext } from "../../MediaQueryContext";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

import "./NavigationBar.scss";

const NavbarContainer = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const { isDesktop } = useMediaQueryContext();

  const toggleMenu = () => setIsNavBarOpen(!isNavBarOpen);

  return (
    <div className="navContainer">
      <SearchBar />
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
        <div className="downloadIcon">
          <BsDownload size="2em" />
        </div>
      )}
    </div>
  );
};

export default NavbarContainer;
