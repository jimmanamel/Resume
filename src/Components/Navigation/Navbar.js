import { Link } from "react-router-dom"

const Navbar=()=>{
    return(
        <nav>
       <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/Career">Career</Link>
          </li>
          <li>
             <Link to="/Projects">Projects</Link>
          </li>
       </ul>
 </nav>
    )
}

export default Navbar