const nome = 'João'
const idade = 16
const alturaM = 1.83
const peso = 78

let imc;

imc = peso / (alturaM * alturaM) 


let anoNascimento;

anoNascimento = 2022 - idade



// usando template string

console.log(`Meu nome é ${nome} tenho ${idade} anos, minha altura é ${alturaM} e meu peso ${peso} portanto meu imc é de ${imc} e eu nasci no ano de ${anoNascimento}`)