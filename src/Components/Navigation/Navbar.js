import { Link } from "react-router-dom";

import './NavigationBar.scss'

const Navbar = () => {
  return (
    <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/Career">Career</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contacts">Contacts</Link>
    </nav>
  );
};

export default Navbar;
