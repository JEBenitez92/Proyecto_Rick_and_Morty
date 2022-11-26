import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

export default function Nav(props){
    return(
        <div>
            <h1>Rick and Morty</h1>
            <div>
            <SearchBar onSearch={props.onSearch} />
            </div>
            <div>
                <NavLink to={'/home'}>
                    <button>Card</button>
                </NavLink>
                <NavLink to={'/about'}>
                    <button>About</button>
                </NavLink>
            </div>
        </div>
    )
}