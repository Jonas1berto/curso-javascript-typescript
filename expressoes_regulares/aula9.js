// Encontra todas as palavras
palavrasRegEx = /([\wÀ-ú]+)/g

// Tira todos os números
naoNumerosRegEx = /\D/

// Valida IP
const ipRegExp =
  /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g

// Valida CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g

// Valida telefone
const validaTelefone = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g

// Validar senhas fortes
const validaSenhaForte =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%¨&*]).{8,}$/g

// Validar e-mails
// [^\s]+@[^\s]+\.[^\s]+(\w+)* (Permissiva)
// [^\s\.]+\.?[^\s\.]+@[^\s]+\.[^\s]+\w+
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1-3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\)))
