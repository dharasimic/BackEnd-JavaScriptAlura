const estudantes = require('./estudantes');

function filtraPropriedades (lista, propriedade) {
    return lista.filter((estudantes) => {
        return !estudantes.endereco.hasOwnProperty(propriedade);
    })
}

const enderecosIncompletos = filtraPropriedades(estudantes, 'cep');
console.log(enderecosIncompletos);