const Aula09_Nome = ({nome, index, excluir}) =>{
    return(
    <p >{nome}
    <button onClick={excluir}>EXCLUIR</button>
    </p>

    )
}

export default Aula09_Nome