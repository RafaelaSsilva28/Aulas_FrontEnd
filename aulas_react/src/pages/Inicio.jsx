import {  Link  } from 'react-router-dom'

function Inicio(){

    return(
        <div>
            <h1>Bem-Vindo</h1>
            {/*<a hreft='/'> </a>*/}
            <Link to= '/detalhes'>Ir para a pagina Detalhes</Link>  
            <br />
            <Link to= '/'>Ir para a pagina inicial</Link>  
        </div>
    )
}
export default Inicio 