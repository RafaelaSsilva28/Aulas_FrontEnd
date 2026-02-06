//objetos
const pais = {
    "nome": "Brasil ",
    "capital": "Brasilia",
    "idioma": "Português",
    "populacao": 1213214321,
    "regiao": {
        "sudeste": "São Paulo / Rio de Janeiro / Minas / ES",
        "sul": "PR RS SC",
        "norte": "AM AC RR RO PA AP TO"
    }
}
console.log(pais.capital);
console.log(pais.regiao.sul);

//destruturação do objeto 
//let nome = pais.nome;
//let capital = pais.capital;
//let populacao = pais.populacao;
//let idioma = pais.idioma;
    let { nome, capital, populacao, idioma } = pais;
console.log(nome, capital, populacao, idioma);

