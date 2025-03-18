const biblioteca = require ('./biblioteca');

function encontrarId(id) {
    return biblioteca.find(livro => livro.id === id) || `Não existe um livro com o id ${id}`;
}

const livroEncontrado = encontrarId(1);

console.log('-------------------------');
console.log('O livro encontrado foi: ');
console.log(livroEncontrado);
console.log('-------------------------');

const livroNaoEncontrado = encontrarId(10);
console.log('O livro encontrado foi: ');
console.log(livroNaoEncontrado);
console.log('-------------------------');