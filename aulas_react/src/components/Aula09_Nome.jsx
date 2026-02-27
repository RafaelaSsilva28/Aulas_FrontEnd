
function Aula09_Nome({ index, pessoa, botaoExcluir }) {
  return (
    <div>
      <p>
         {pessoa}
      </p>

      <button onClick={() => botaoExcluir(index)}>
        Excluir
      </button>
    </div>
  );
}


export default Aula09_Nome