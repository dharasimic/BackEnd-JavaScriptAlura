const estudantes = require('./estudantes');

function ordena(lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade])
            return -1;
        if (a[propriedade] > b[propriedade])
            return 1;
        return 0;
    })
}

const estudantesOrdenados = ordena(estudantes, 'nome');
console.log(estudantesOrdenados);