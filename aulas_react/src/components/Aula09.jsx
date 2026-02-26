import {  useState  } from "react"
import { estilos } from "../style/Estilos"
import Aula07_Perfil from "./Aula07_Perfil";
import Aula09_Numero from "./Aula09_Numero";
import Aula09_ListaNomes from "./Aula09_ListaNomes";

const Aula09 = () => {
    const [numerosSorteados, setNumeroSorteados] = useState( [10, 43, 28, 2])

    const [listaPerfis, setListaPerfis] = useState([
        {"nome": "Nicolas", "foto": "https://img.cdndsgni.com/preview/12705616.jpg"},
        {"nome": "Diogo", "foto": "https://wendellcarvalho.com.br/wp-content/uploads/2023/07/pessoa-intensa.jpg"}
    ])


    function botaoSortear() {
        const novoNumero = Math.floor(Math.random()* 60) + 1
        setNumeroSorteados([...numerosSorteados, novoNumero])
    }

    function botaoExcluir(nr) {
        const novosNumeros = numerosSorteados.filter( (numero) => numero != nr)
        setNumeroSorteados( novosNumeros )
    }

    return(
        <div style={estilos.cardAula}>
            <h2>Aula09 - Listas em React</h2>
            <h3>Exibindo conteudos dinamicamente com listas</h3>
            <hr />
            
            <button onClick={botaoSortear}>NOVO NUMERO</button>

            <h3>Lista de numeros sorteados:</h3>
            {/* A função map é como o for para arrays/vetores */}
            {
                numerosSorteados.map(  (numero, index) => (
                    <Aula09_Numero key={index} numero={numero} excluir={() => botaoExcluir(numero)} />
                ) )
            }
                <div style={{display: 'flex'}}>
            {
                listaPerfis.map( (perfil, index) => (
                    <Aula07_Perfil key={index} nome={perfil.nome} foto={perfil.foto} />
                ))
            }
                <Aula09_ListaNomes />
            </div>

        </div>
    )
};
export default Aula09;