const animais = require ('./animais');

function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

function compararIdadeCrescente(a, b) {
    return a.idade - b.idade;
}

function compararIdadeDecrescente(a, b) {
    return b.idade - a.idade;
}

console.log('--------------------------------------------------');
const animaisOrdenadosPorIdadeCrescente = ordenarAnimais(compararIdadeCrescente);
console.log('Animais ordenados por idade crescente:');
console.log(animaisOrdenadosPorIdadeCrescente);
console.log('--------------------------------------------------');
const animaisOrdenadosPorIdadeDecrescente = ordenarAnimais(compararIdadeDecrescente);
console.log('Animais ordenados por idade decrescente:');
console.log(animaisOrdenadosPorIdadeDecrescente);
console.log('--------------------------------------------------');