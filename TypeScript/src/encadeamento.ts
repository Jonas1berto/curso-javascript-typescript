// Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Um título',
  texto: 'Um texto...',
  data: new Date(),
};

// se o valor for 'undefined' ou 'null', a mensagem aparecerá
console.log(documento.data?.toDateString() ?? '1-Opss, valor não encontrado.');
console.log(undefined ?? '2-Opss, valor não encontrado.');
console.log(null ?? '3-Opss, valor não encontrado.');
console.log(false ?? '4-Opss, valor não encontrado.');
