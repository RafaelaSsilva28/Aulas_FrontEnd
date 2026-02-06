const Aula04_Filmes = ({titulo, genero, img}) => {
    return(
        <div style={estilos.div}>
        <div style={estilos.card} >
            <img style={estilos.img} src={img} alt="" />
            <h3>{titulo}</h3>
            <p>{genero}</p>
            <button>Entrar</button>
        </div>
        </div>
    )
}
export default Aula04_Filmes

const estilos = {
    img: {
       height:'300  px',
       borderRadius: '5px',
        

    },
    div: {
       display: 'inline-block',
       flexWrap: 'wrap', /* Permite que os cards pulem de linha em telas pequenas */
       gap: '20px', /* Espaçamento entre os cards */
       justifyContent: 'center', /* Centraliza os cards na tela */
       padding: '20px'
    },
    card:{  
      
    }
}