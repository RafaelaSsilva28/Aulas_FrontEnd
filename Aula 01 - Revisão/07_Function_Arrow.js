//Função anônima
const saudacao2 = function (nome) {
    console.log(`Tenha um bom dia ${nome}`);
}
saudacao2('Douglas');

//ARROW FUNCTION
const saudacao3 = (nome) => {
    console.log(`Tenha um bom dia ${nome}`);
}
saudacao2('Douglas');

//ARROW FUNCTION SOMA
const soma2 =  (n1, n2) => {
    let resultado2 = n1 + n2;
    return resultado2;
}
let resultadoFunc = soma2(1, 2);
console.log(resultadoFunc);

//EM UMA LINHA SÓ
const soma4 = (n1, n2) => n1 + n1