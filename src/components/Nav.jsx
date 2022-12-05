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
                <NavLink to={'/home'} className={({isActive})=>(isActive? "Style.Active":null)}>
                    <button>Card</button>
                </NavLink>
                <NavLink to={'/favorites'} activeStyle={{
         color: 'green'}}>
                    <button>Favorito</button>
                </NavLink>
                <NavLink to={'/about'} activeClassName={Style.Active}>
                    <button>About</button>
                </NavLink>
                <NavLink to={'/'}>
                    <button className={Style.cierre}>Cerrar sesion</button>
                </NavLink>
            </div>

        </div>
    )
}