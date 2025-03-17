const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    ligado: false,
};

const carroNovo = {
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: 2020,
    cor: 'preto',
}

const carroComNovosDetalhes = {
    ...carro,
    ...carroNovo,
}

console.log(`---------------------------------------------------`);
console.log('Carro com novos detalhes:');
console.log(carroComNovosDetalhes);
console.log(`---------------------------------------------------`);

carroComNovosDetalhes.cor = 'Vermelho';

console.log('Carro com novos detalhes:');
console.log(carroComNovosDetalhes);
console.log(`---------------------------------------------------`);