function relogio() {
  const relogio = document.querySelector('.relogio')
  const iniciar = document.querySelector('.iniciar')
  const pausar = document.querySelector('.pausar')
  const zerar = document.querySelector('.zerar')

  

  function criarHorasSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    })
  }

  let segundos = 0
  let timer;
  function iniciarRelogio(){
    timer = setInterval(function() {
    segundos++
    relogio.innerHTML = criarHorasSegundos(segundos)
  }, 1000)}

  iniciar.addEventListener('click', function (e) {
    relogio.style.color = 'green'
    clearInterval(timer)
    iniciarRelogio()
  })

  pausar.addEventListener('click', function (e) {
    relogio.style.color = 'red'
    clearInterval(timer)
  })

  zerar.addEventListener('click', function (e) {
    relogio.style.color = 'black'
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
  })
}

relogio()
