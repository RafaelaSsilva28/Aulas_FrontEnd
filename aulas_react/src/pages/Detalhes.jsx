import {  Link } from 'react-router-dom'
function Detalhes(){

    return(
        <div>
            <h1>Mais informações</h1>
            {/*<a hreft='/'> </a>*/}
            <Link to= '/contato'>Ir para a pagina contatos</Link>  

        </div>
    )
}
export default Detalhes 