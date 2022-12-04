import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import Style from "../estilos_componentes/Nav.module.css"

export default function Nav(props){
    return(
       
        <div className ={Style.nav}>

            <h1>Rick and Morty</h1>

            <div>
            <SearchBar onSearch={props.onSearch} />
            </div>

            <div className={Style.botones}>
                <NavLink to={'/home'}>
                    <button>Card</button>
                </NavLink>
                <NavLink to={'/favorites'}>
                    <button>Favorito</button>
                </NavLink>
                <NavLink to={'/about'}>
                    <button>About</button>
                </NavLink>
                <NavLink to={'/'}>
                    <button className={Style.cierre}>Cerrar sesion</button>
                </NavLink>
            </div>

        </div>
    )
}