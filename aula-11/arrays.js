const alunos = ['Jonas', 'Felip', 'Savio']
alunos[0] = 'Junior' // Substituindo elemento do array
alunos.unshift('Jonas') // Adiciona elemento no começo do array
alunos.push('Maria') // Adiciona elemento no fim do array
alunos.pop() // Remove ultimo elemento do array
alunos.shift() // Remove primeiro elemento do array
alunos.slice(0, 3) // Pega os elementos do indice 0 ate o indice 3 do array

console.log(alunos)
console.log(alunos[0])
