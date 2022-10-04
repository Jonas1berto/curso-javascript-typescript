// const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras + umDia)
// const data = new Date(2019, 3); // a, m, d, h, m, s ,ms
const data = new Date('2022-10-1 20:20:59')
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia da semana', data.getDay()); // 0 é Domingo, 6 é Sábado
console.log(data.toString())
