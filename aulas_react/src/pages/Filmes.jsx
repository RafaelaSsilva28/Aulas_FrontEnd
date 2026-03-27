import {  Link, useParams  } from 'react-router-dom'

function Filmes(){
    const {id} = useParams();
    return(
        <div>
            <h1>Exibindo informações do filme {id}</h1>
            <Link to= '/'>Voltar para Principal</Link>  
        </div>
    )
}
export default Filmes