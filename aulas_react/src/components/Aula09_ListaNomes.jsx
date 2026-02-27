import { useState } from "react";
import { estilos } from "../style/Estilos"
import Aula09_Nome from "./Aula09_Nome";

function Aula09_ListaNomes() {

  //variavel de estado 
  const [listaPresenca, setListaPresenca] = useState([]);
  const [nome, setNome] = useState('');

  function botaoAdicionar() {
        setListaPresenca([...listaPresenca, nome]);  //spreed... pega tudo que tem do vetor atual e coloca aqui dentro
        console.log(listaPresenca);
        
  }


  function limparLista() {
    setListaPresenca([]);
  }

  return (
    <div style={estilos.cardAula}>
      <h1>Lista de Presença do Churrasco</h1>

      <input
        type="text"
        placeholder="Digite seu nome e o que vai levar"
        onChange={(event) => setNome(event.target.value)} value={nome}  //cada tecla digitada atualiza o nome
/>

      <button onClick={botaoAdicionar}>
        Adicionar
      </button>

      {listaPresenca.map((pessoa, index) => (  //index numero
        <Aula09_Nome
          key={index}
          pessoa={pessoa}
          excluir={botaoExcluir}
          
        />
      ))}

      <button onClick={limparLista}>
        Limpar Lista
      </button>

    </div>
  );
}

export default Aula09_ListaNomes;