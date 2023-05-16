const data = new Date()

let hora = data.getHours()
let minuto = data.getMinutes()
let dia = data.getDate()


console.log(data.toString())
console.log(hora)
console.log(minuto)

console.log('hoje é dia ' + dia + ' e o horario é ' + hora + ':' + minuto)
