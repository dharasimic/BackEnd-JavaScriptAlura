const pessoa = {
    nome: 'Gabriel',
    notas: [10, 8, 9, 10],
    calcularMedia:  function (notas) {
        const soma = notas.reduce((total, numero) => total + numero, 0);
        return soma / notas.length;
    },
    classificarDesempenho: function (media) {
        if (media >= 9)
            console.log('Desempenho excelente.');
        else if (media >= 7.5)
            console.log('Bom desempenho.');
        else if (media >= 6)
            console.log('Desempenho regular.');
        else
            console.log('Desempenho insuficiente.');
    }
}

console.log(`---------------------------------------------------`);
console.log("Nome: " + pessoa.nome);
console.log("Notas: " + pessoa.notas.join(", "));
console.log("Média: " + pessoa.calcularMedia(pessoa.notas));
pessoa.classificarDesempenho(pessoa.calcularMedia(pessoa.notas));
console.log(`---------------------------------------------------`);

