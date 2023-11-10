import { BsSearch } from "react-icons/bs";

const SearchBar=()=>{
    return(
        <div className="searchContainer">
            <div className="searchIcon"><BsSearch size="2em"/></div>
            <input type="search" id="site-search" name="site-search"/>
        </div>
    )
}

export default SearchBar