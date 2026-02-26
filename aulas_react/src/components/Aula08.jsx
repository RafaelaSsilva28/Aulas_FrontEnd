import { estilos } from '../style/Estilos'
import jogo from '../assets/jogo.png'

const Aula08 = () =>{
    return(
        <div style={estilos.cardAula}> 
            <h2>Aula08 - Revisão</h2>
            <h3>Revisão de Conteúdo com o Jogo Numero Secreto</h3>

            <a href="https://jogo-numero-secreto-puce-one.vercel.app/">
            <img src={jogo} style={{width:'100%'}} />
            Link do Jogo</a>
        </div>

    )
}

export default Aula08