import { useState } from "react"
import { estilos } from "./GameEstilos"
import { use } from "react"
const Game = () => {
    const [numeroSecreto, setNumeroSereto] = useState(sortearNumero)
    const [chute, setChute] = useState('')
    const [mensagem, setMensagem] = useState('Adivinhe um numero entre 1 e 100')
    const [tentativas, setTentativas] = useState('1')
    const [JogoFinalizado, setJogoFinalizado] = useState(false)

    function sortearNumero(){
        return Math.floor(Math.random() * 100) + 1
    }
    function botaoChutar(){
        if (  numeroSecreto == chute  ){
            setMensagem(`✅ Acertou! Você descobriu em ${tentativas} tentativas! 🤪JOGUE NOVAMENTE🤪`)
            setJogoFinalizado(true)
        } else if (numeroSecreto < chute){
            setMensagem(`Você chutou o numero ${chute}. O n° secreto é menor! `)
            setChute('')
            setTentativas(tentativas + 1)
        }else {
            setMensagem(`Você chutou ${chute}. O n° secreto é maior! `)
            setChute('')
            setTentativas(tentativas + 1)
        }
    }

    function botaoNovoJogo (){
        setChute('')
        setJogoFinalizado(false)
        setTentativas(1)
        setMensagem('Escolha um numero entre 1 a 100')
        setNumeroSereto(sortearNumero)
    }

    return(
        <section style={estilos.container}>
            <div style={estilos.conteudo}>
                <div style={estilos.informacoes}>
                    <div style={estilos.texto}>
                        <h1 style={estilos.h1}>Jogo Numero Secreto</h1>
                        <p style={estilos.mensagem}>{mensagem}</p>
                    </div>
                    <input onChange={(event) => setChute(event.target.value)} value={chute} 
                    type="number" style={estilos.chute} />
                    <div style={estilos.botoes}>
                        <button style={estilos.botao} onClick={botaoChutar}>Chutar</button>
                        <button style={estilos.botao}onClick={botaoNovoJogo}>Novo Jogo</button>
                    </div>
                </div>
                <img src="./img/ia.png" style={estilos.imagem} />
            </div>
        </section>                     
    )  
}

export default Game