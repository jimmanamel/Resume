import Navbar from "./Navbar"
import SearchBar from "./SearchBar"

const NavbarContainer=()=>{
    return(
        <nav>
            <span>
                <SearchBar />
            </span>
            <span>
                <Navbar />
            </span>
            <span>
                <button></button>
            </span>
        </nav>
    )
}

export default NavbarContainer