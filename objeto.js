/*const pessoa1 = {

    nome: 'Joao',
    sobrenome: 'Ebert',
    idade: 16


};

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade, 'anos')

*/

function craiPessoal(nome , sobrenome, idade) {
    return {nome,sobrenome,idade}
}

const pessoa1 = craiPessoal('joao', 'ebert', 16)
const pessoa2 = craiPessoal('maria', 'oliveira', 26)

console.log(pessoa1)
console.log(pessoa2.nome)