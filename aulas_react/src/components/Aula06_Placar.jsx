import { useState } from "react";

const Aula06_Placar = () => {
  const [contador, setContador] = useState(2);
  const [contador2, setContador2] = useState(1);
  const [contadorZ, setContadorZ] = useState(0);
  const [contadorS, setContadorS] = useState(6);

  return (
    <div>
      <h2>Placar Eletrônico</h2>
      <h4> FUTEBOL </h4>
      <h3>Time 1</h3>
      <h4>{contador}</h4>
      <button onClick={() => setContador(contador + 1)}>+1 Ponto</button>

      <p>X</p>

      <h3>Time 2</h3>
      <h4>{contador2}</h4>
      <button onClick={() => setContador2(contador2 + 1)}>+1 Ponto</button>
            <hr />
      <div>
        <h4>BASQUETE</h4>
        <h3> Time 1 </h3>
            <h4>{contadorZ}</h4>
                  <button onClick={() => setContadorZ(contadorZ + 1)}>+1 Ponto</button>
                  <button onClick={() => setContadorZ(contadorZ + 2)}>+2 Ponto</button>
                  <button onClick={() => setContadorZ(contadorZ + 3)}>+3 Ponto</button>
            <p>X</p>
        <h3>Time 2</h3>
            <h4>{contadorS}</h4>
                  <button onClick={() => setContadorS(contadorS + 1)}>+1 Ponto</button>
                  <button onClick={() => setContadorS(contadorS + 2)}>+2 Ponto</button>
                  <button onClick={() => setContadorS(contadorS + 3)}>+3 Ponto</button>

      </div>
    </div>
    
  );
};
export default Aula06_Placar;
