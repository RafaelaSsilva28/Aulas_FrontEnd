import { useState, useEffect } from "react"
import { estilos } from "../style/Estilos"


const Aula10 = () => {
    const [contador, setContador] = useState(0) 

//o useEffect fica "monitorando" uma variavel e executa a função sempre que ela sofrer uma alteração
        //esse efeito sera executado sempre que o "contador" mudar
    useEffect( () => {
        console.log(contador);   //variavel sempre que clicada sofre uma alteração sofre alguma coisa
        document.title = `Contagem: ${contador}`

    }, [contador] )

    //o useEffec com as chaves vazias significa que o efeito deve ser executado apenas quando a pagina é carregada
    useEffect( () => {
        const contadorSalvo = localStorage.getItem('valorContador') || 0; 
        setContador(JSON.parse(contadorSalvo)) //desconvertendo de json para valor comum
    }, [] )  

    function botaoContador(){
        const novoContador = contador + 1
        setContador(novoContador)
           //armazenando localmente nosso contador
        localStorage.setItem('valorContador', JSON.stringify(novoContador))
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 10 - useEffect e localStorage</h2>
            <h3>Conhecendo a Hook useEffect e aprendendo a armazenar dados localmente</h3>
            <hr />


            <p>Você clicou {contador} vezes</p>
            <button onClick={botaoContador} >Clique aqui</button>
        </div>
    )
}


export default Aula10