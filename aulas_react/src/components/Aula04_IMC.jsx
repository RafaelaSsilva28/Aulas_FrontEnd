
const Aula04_IMC = ({nome, peso, altura, cor}) => {

   // let nome = 'Guilherme';
    //let peso = 75;
    //let altura = 1.70;
    let imc = peso / (altura * altura); //altura **2 ou (Math.sqrt(altura))

    return (
        <div>
            <h3>Calculadora de IMC</h3>
            <p style={{color: cor}}>Olá {nome}</p>
            <p>Altura: {altura}cm</p>
            <p>Peso: {peso}kg</p>
            <p>IMC: {imc.toFixed(1)} Kg/m</p>  
            <hr />
        </div>
    )
}
export default Aula04_IMC