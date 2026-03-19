import {  useState  } from "react"
import { estilos } from "../style/Estilos"
import Aula13_Produto from "./Aula13_Produto"
import Aula13_CRUD_Produtos from "./Aula13_CRUD_Produtos"
import Aula13_CRUD_Usuarios from "./Aula13_CRUD_Usuarios"

const Aula13 = () => {
    return(
        <div style={estilos.cardAula}>
            <h2>Aula13 - CRUD com API</h2>
            <h3>Criando uma CRUD utilizando API desenvolvida em Backend</h3> 
            <hr />
            <Aula13_CRUD_Produtos />
            <hr />
            <Aula13_CRUD_Usuarios />
        </div>
    )
}

export default Aula13



