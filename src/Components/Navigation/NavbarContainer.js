import { BsDownload } from "react-icons/bs";

import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

import './NavigationBar.scss'

const NavbarContainer = () => {
  return (
    <div className="navContainer">
      <SearchBar />
      <Navbar />
      <div className="downloadIcon">
        <BsDownload  size="2em"/>
      </div>
    </div>
  );
};

export default NavbarContainer;
