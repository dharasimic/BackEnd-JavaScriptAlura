const estudantes = require('./estudantes');

function buscaInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Olva');
console.log(estudanteEncontrado);

const telefoneEncontrado = buscaInformacao(estudantes, 'telefone', '31949463623');
console.log(telefoneEncontrado);