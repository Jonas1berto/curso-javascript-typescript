const fs = require('fs').promises
// Criando um arquivo teste.txt
/*
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt')
// Colocando uma frase no arquivo teste.txt
fs.writeFile(caminhoArquivo, ' Frase 1', { flag: 'w' })
*/

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w' })
}

  
