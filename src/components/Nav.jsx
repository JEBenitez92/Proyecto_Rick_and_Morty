import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import Style from "../estilos_componentes/Nav.module.css"

export default function Nav(props){
    return(
       
        <div className ={Style.nav}>

            <div className={Style.contH1} >
            <h1>Rick and Morty</h1>
            </div>

            <div className={Style.Buscador} >
            <SearchBar onSearch={props.onSearch} />
            </div>

            <div className={Style.botones}>
                <Link to={'/home'} >
                    <button>Card</button>
                </Link>
                <Link to={'/favorites'} >
                    <button>Favorito</button>
                </Link>
                <Link to={'/about'} >
                    <button>About</button>
                </Link>
            </div>

            <div>
                <Link to= {'/'}>
                    <button className={Style.cierre} onClick={()=> props.setAccess(false)} >Cerrar sesion</button>
                </Link>
            </div>

        </div>
    )
}