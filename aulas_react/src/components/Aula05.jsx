import { estilos } from "../style/Estilos";
import Aula05_Exercicio from "./Aula05_Exercicio";

const Aula05 = () => {
  function botaoClique() {
    alert("Você clicou no botão");
    console.log("Clique no botão");
  }
  function entradaMouse(event) {
    console.log("Mouse entrou");
    event.target.style.backgroundColor = "#b8aeae";
    event.target.style.color = "#4d2a8d";
  }
  function saidaMouse(event) {
    console.log("Mouse saiu");
    event.target.style.backgroundColor = "#c19696";
    event.target.style.color = "#4c783d";
  }
  function alterarCor(event) {
    if (event.key == "a") {
      event.target.style.backgroundColor = "#1122ba";
    } else if (event.key == "v") {
      event.target.style.backgroundColor = "#0cb325";
    } else if (event.key == "c") {
      event.target.style.backgroundColor = "#808088";
    } else if (event.key == "r") {
      event.target.style.backgroundColor = "#7911ba";
    }
  }

  return (
    <div style={estilos.cardAula}>
      <h2>Aula05 - Eventos em um componente</h2>
      <h3>
        Os eventos são fundamentais para criar interatividade em aplicações web
      </h3>
      <hr />

      <p>Evento onClick - clique do usuario em qualquer elemento</p>
      <button onClick={botaoClique}>Clique aqui</button>

      <p>Evento onDoubleClick - clique duas vezes no elemento</p>
      <button onDoubleClick={() => alert("Você clicou duas vezes")}>
        Clique aqui
      </button>
      <hr />

      <p>Evento onChange - sempre que um campo de entrada é alterado</p>

      <input
        onChange={(event) => alert(event.target.value)}
        type="text"
        placeholder="Digite algo..."
      />

      <select onChange={(event) => alert(event.target.value)}>
        <option value="1A"> 1° A EM</option>
        <option value="2A"> 2° A EM</option>
        <option value="3A"> 3° A EM</option>
        <option value="3B"> 3° B EM</option>
      </select>

      <hr />
      <p>Evento onMouseEnter & onMouseLeave - quando sai e entra o mouse</p>
      <p onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>
        PASSE O MOUSE AQUI
      </p>

      <hr />
      <p>Evento onKeyDown - Aciona em evento quando pressiona uma tecla</p>
      <input type="text" onKeyDown={(event) => alert(event.key)} />
      <input
        type="text"
        onKeyDown={alterarCor}
        placeholder="a - azul, v - verde, c - cinza, r - roxo"
      />
      <hr />
      <Aula05_Exercicio/>
    </div>
  );
};
export default Aula05;
