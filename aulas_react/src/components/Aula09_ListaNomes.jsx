import {  useState  } from "react"
import { estilos } from "../style/Estilos"
import Aula09_Nome from "./Aula09_Nome";


const Aula09_ListaNomes = () => {
    const [listaPresenca, setListaPresenca] = useState([])


    function botaoSortear() {
        const novosNome = Math.floor(Math.random()* 60) + 1
        setListaPresenca([...listaPresenca, novosNome])
    }

    function botaoExcluir(nm) {
        const novosNome = listaPresenca.filter( (nome) => nome != nm)
        setListaPresenca( novosNome )
    }
    
    return(
        <div style={estilos.cardAula}>
            <h1>Lista de Presença do Churrasco</h1>
            <input type="text" onChange={nome} />
            <button></button>
            <hr />
            
             <button onClick={botaoLimpar} >LIMPAR</button>  

            <h3>Lista de nomes sorteados:</h3>
            {/* A função map é como o for para arrays/vetores */}
            {
                listaPresenca.map(  (nome, index) => (
                    <Aula09_Nome key={index} nome={nome} excluir={() => botaoExcluir(nome)} />
                ) )
            }
            

        </div>
    )
};
export default Aula09_ListaNomes;