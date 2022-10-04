// (Condição ) ? 'Valor para verdadeiro'
// : 'valor para falso';
const pontuacaoUsuario = 999
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'
console.log(nivelUsuario)

corUsuario = null
corPadrao = corUsuario || 'Black'
console.log(corPadrao)

/*
if (pontuacaoUsuario >= 1000) {
  console.log('Usuário VIP')
} else {
  console.log('Usuário normal')
}
*/
