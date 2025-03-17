const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);
console.log(typeof stringEstudante);

const objetoEstudante = JSON.parse(stringEstudante);
console.log(objetoEstudante);
console.log(typeof objetoEstudante);
