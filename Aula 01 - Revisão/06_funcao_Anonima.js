//Função nomeada
function saudacao(nome) {
    console.log(`Tenha um bom dia ${nome}`);
}
saudacao('Douglas');

//Função anônima
const saudacao2 = function (nome) {
    console.log(`Tenha um bom dia ${nome}`);
}
saudacao2('Douglas');

//Função nomeada
function soma (n1, n2) {
    let resultado = n1 + n2;
    return resultado;
}
let resultadoFuncao = soma(8, 7);
console.log(resultadoFuncao);


//Função anônima
const soma2 = function (n1, n2) {
    let resultado2 = n1 + n2;
    return resultado2;
}
let resultadoFunc = soma2(1, 2);
console.log(resultadoFunc);
