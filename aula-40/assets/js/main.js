function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13 ) {
          this.realizaConta()
        }
      })
    },

    realizaConta(){
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta)
      } catch(e) {
        this.display.value = ''
        alert('Conta inválida');
        return
      }
    },

    clearDisplay() {
      this.display.value = ''
    },

    clearOne() {
      this.display.value = this.display.value.slice(0, -1)
    },

    cliqueBotoes() {
      // Aqui o this é a calculadora
      document.addEventListener('click', e => {
        const el = e.target

        if (el.classList.contains('btn-number')) {
          this.btnParaDisplay(el.innerText)
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        if (el.classList.contains('btn-del')) {
          this.clearOne()
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor
    }
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()
