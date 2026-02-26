

const Aula09_Numero = ({numero, index, excluir}) =>{
    return(
    <p >{numero}
    <button onClick={excluir}>EXCLUIR</button>
    </p>

    )
}

export default Aula09_Numero