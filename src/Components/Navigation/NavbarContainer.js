import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

import './NavbarContainer.scss'

const NavbarContainer = () => {
  return (
    <div className="navContainer">
      <SearchBar />
      <Navbar />
      <button></button>
    </div>
  );
};

export default NavbarContainer;
