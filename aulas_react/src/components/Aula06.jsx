import { estilos } from "../style/Estilos"
import { useState } from "react"
import Aula06_Contador from "./Aula06_Contador"

const Aula06 = () => {
    //Declarando uma variavel de estado
    const [ nome, setNome ] = useState('')    //variavel, função e estado inicial
    const [ cidade, setCidade ] = useState('')    //variavel, função e estado inicial
    const [ telefone, setTelefone ] = useState('')    //variavel, função e estado inicial
    const [ visivel, setVisivel ] = useState(false)    //variavel, função e estado de verdadeiroou falso
    
    //Variavel para armazenar nosso componente 
    function botaoLimpar(){
        setNome('')
        setCidade('')
        setTelefone('')
    }
    
    return(  //final da function
        <div style={estilos.cardAula}>
            <h2>Aula06 - Estado de um componente</h2>
            <h3>O hook useState adiciona estado a componentes funcionais</h3>
            <hr />
            
            <input type="text" onChange={ (event) => setNome(event.target.value) } value={nome}  />
            <input type="text" onChange={ (event) => setCidade(event.target.value) } value={cidade}  />
            <input type="text" onChange={ (event) => setTelefone(event.target.value) } value={telefone}  />
             <button onClick={botaoLimpar} >LIMPAR</button>  
            <p>Olá {nome}, você mora {cidade} e seu telefone é {telefone}</p>   
            <hr />

            <button onClick={ () => setVisivel( !visivel )}>
                 {visivel == false ? <p> Mostrar Saldo 👀</p>: <p>Ocultar Saldo🔒</p>}
            </button>
                
            { visivel == false ? <p> R$ ***,** </p> : <p>R$ 732,10</p> }

            <hr />

            <Aula06_Contador/>

        </div>
    )
}
export default Aula06