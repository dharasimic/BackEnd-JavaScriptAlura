const catalogoFilmes = require('./catalogoFilmes');

function filtrarPorAno (ano) {
    return catalogoFilmes.filter(filme => filme.anoLancamento === ano);
}

const filmesPor2009 = filtrarPorAno(2009);

console.log('-------------------------');
console.log('Filmes encontrados:');
console.log(filmesPor2009);
console.log('-------------------------');

const filmesPor2019 = filtrarPorAno(2019);
console.log('Filmes encontrados:');
console.log(filmesPor2019);
console.log('-------------------------');