const resultado = document.querySelector('.container h1')

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo'
      break
    case 1:
      diaSemanaTexto = 'Segunda-Feira'
      break
    case 2:
      diaSemanaTexto = 'Terça-Feira'
      break
    case 3:
      diaSemanaTexto = 'Quarta-Feira'
      break
    case 4:
      diaSemanaTexto = 'Quinta-Feira'
      break
    case 5:
      diaSemanaTexto = 'Sexta-Feira'
      break
    case 6:
      diaSemanaTexto = 'Sabado'
      break
    default:
      diaSemanaTexto = ''
      break
  }
  return diaSemanaTexto
}

function getMonthText(monthText) {
  let nameMonthText

  switch (monthText) {
    case 1:
      nameMonthText = 'Janeiro'
      break
    case 2:
      nameMonthText = 'Fevereiro'
      break
    case 3:
      nameMonthText = 'Março'
      break
    case 4:
      nameMonthText = 'Abril'
      break
    case 5:
      nameMonthText = 'Maio'
      break
    case 6:
      nameMonthText = 'Junho'
      break
    case 7:
      nameMonthText = 'Julho'
      break
    case 8:
      nameMonthText = 'Agosto'
      break
    case 9:
      nameMonthText = 'Setembro'
      break
    case 10:
      nameMonthText = 'Outubro'
      break
    case 11:
      nameMonthText = 'Novembro'
      break
    case 12:
      nameMonthText = 'Dezembro'
  }

  return nameMonthText
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`
}

function formataHora(data) {
  const hora = zeroAEsquerda(data.getHours())
  const min = zeroAEsquerda(data.getMinutes())
  const seg = zeroAEsquerda(data.getSeconds())

  return `${hora}:${min}:${seg}`
}

function createData(data) {
  let diaSemana = data.getDay()
  let monthText = data.getMonth() + 1

  let diaSemanaTexto = getDiaSemanaTexto(diaSemana)
  let nameMonthText = getMonthText(monthText)

  return `${diaSemanaTexto}, ${data.getDate()} de ${nameMonthText}`
}

const data = new Date()
let dataBrasil = createData(data)
let horasBrasil = formataHora(data)

resultado.innerHTML = `${dataBrasil}, <br> As horas são: ${horasBrasil}`



// Forma de obter a data simplificada!!!
/*
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
  dateStyle: 'full',
  timeStyle: 'short'
}
h1.innerHTML = data.toLocaleString('pt', opcoes)
*/