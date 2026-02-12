import '../style/Aula03.css'
import { estilos } from '../style/Estilos'

const Aula05_Exercicio = () => {
     function botaoClique() {
    alert("Você clicou no botão");
    console.log("Clique no botão");
  }
    function entradaMouse(event) {
    console.log("Mouse entrou");
    event.target.style.backgroundColor = "#af0404";
  }
  function saidaMouse(event) {
    console.log("Mouse saiu");
    event.target.style.backgroundColor = "#3a2222";
  }


  return (
    <div >
      <h2>Praticando o Exercicio</h2>
        <p>EVENTO - onClick</p>
              <button onClick={botaoClique}>Clique aqui</button>
                      <button onDoubleClick={() => alert("Você clicou duas vezes")}> Clique aqui</button>
                      <hr />
        <p>EVENTO - onChange</p>
      <input
        onChange={(event) => console.log(event.target.value)} type="text" placeholder="Digite algo..."
      />
      <hr />
      <p>EVENTO - onMouseEnter & onMouseLeave</p>
      <p onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>
        .
      </p>
      <hr />
      <p>EVENTO - onKeyDown</p>
      <input type="text" onKeyDown={(event) => console.log(event.key)} />
        <hr />
        <p></p>
        <button>
            
        </button>
    </div>
  );
};

export default Aula05_Exercicio;
