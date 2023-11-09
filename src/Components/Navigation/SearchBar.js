import { BsSearch } from "react-icons/bs";

const SearchBar=()=>{
    return(
        <div className="searchContainer">
            <BsSearch/>
            <input type="search" id="site-search" name="site-search"/>
        </div>
    )
}

export default SearchBar