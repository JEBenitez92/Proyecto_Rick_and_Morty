import Style from "../estilos_componentes/About.module.css";

export default function About(props){
    return(
        <div className={Style.contenedor} >
            <h1>Jonathan Benitez</h1>
            <div>
               <p>Esta aplicación esta basada en el anime Rick and Morty. Lo que se busco es conseguir información de una Api y presentarla en forma de tarjetas individuales. 
Para esto cree rutas que muestren distinta información, moviéndome mediante una barra de navegación.
El proyecto me fue solicitado por Henrry, mientras me encontraba cursando el segundo modulo del Bootcamps de Full Stack, en este instituto. 
</p>
            </div>
        </div>
    )
}