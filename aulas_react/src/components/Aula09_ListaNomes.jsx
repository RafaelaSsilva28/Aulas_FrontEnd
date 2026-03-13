import { useState, useEffect } from "react"
import Aula09_Nome from "./Aula09_Nome"

const Aula09_ListaNomes = () => {
    // Variável de estado 
    const [listaPresenca, setListaPresenca] = useState([])
    const [nome, setNome] = useState('')

      useEffect( () => {                            //se não tiver nenhuma informação coloca um vetor para pegar as informações
        const listar = localStorage.getItem('listadeNomes') || "[]"; 
        setListaPresenca(JSON.parse(listar)) //desconvertendo de json para valor comum
    }, [] )  


    function botaoAdicionar(){
        setListaPresenca([...listaPresenca, nome])  //spreed... pega tudo que tem do vetor atual e coloca aqui dentro
        console.log(listaPresenca);
        localStorage.setItem('listadeNomes', JSON.stringify([...listaPresenca, nome])) //salvando no localstorage
                
    }

    function botaoLimpar () {
        setListaPresenca([])
        //   localStorage.setItem('listadeNomes', JSON.stringify([])) //limpando o localstorage
          localStorage.removeItem('listadeNomes') //jeito mais certo de fazer para limpar

    }

    return (
        <div>
            <h1>Lista de Presença do Churrasco</h1>
            
            <input type="text" onChange={(event) => setNome(event.target.value) } value={nome} />
            <button onClick={botaoAdicionar}>Adicionar</button>

            {
                listaPresenca.map( (pessoa, index) => (
                    <Aula09_Nome key={index} pessoa={pessoa} />
                ) )
                
            }
            <button onClick={botaoLimpar}>Limpar</button>
        </div>
    )
}

export default Aula09_ListaNomes




