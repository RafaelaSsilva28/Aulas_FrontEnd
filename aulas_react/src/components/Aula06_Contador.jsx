import { useState } from "react"
import Aula06_Placar from "./Aula06_Placar"

const Aula06_Contador = () => {
    const [contador, setContador] = useState(0)

    function botaoDiminuir(){
        setContador(contador - 1)
    }if(contador < 0){
        setContador(contador <= 0)
    }

    return(
        <div>
                <h2>N°: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
            <button onClick={botaoDiminuir}>Diminuir</button>

            <Aula06_Placar/>
        </div> 
    )
} 
export default Aula06_Contador 
