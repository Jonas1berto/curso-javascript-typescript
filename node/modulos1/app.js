// modulos q ja existem
const path = require('path');
const axios = require('axios')


// modulos que criamos
const mod1 = require('./mod1')
console.log(mod1.falaNome())

const { Pessoa } = require('./mod1')
const p1 = new Pessoa('Junior')
console.log(p1)
