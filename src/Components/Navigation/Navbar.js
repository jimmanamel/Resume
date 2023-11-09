import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/Career">Career</Link>
      </span>
      <span>
        <Link to="/Projects">Projects</Link>
      </span>
    </nav>
  );
};

export default Navbar;
