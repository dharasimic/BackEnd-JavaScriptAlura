const carro = {
    marca: 'Ford',
    modelo: 'Fiesta',
    ano: 2019,
    cor: 'prata',
    placa: 'ABC1234',
    ligado: true,
    ligar: function () {
        if (this.ligado === true)
            console.log('Este carro já está ligado.');
        else {
            this.ligado = true;
            console.log('O carro foi ligado.');
        }
    },
    desligar: function () {
        if (this.ligado === false)
            console.log('Este carro já está desligado.');
        else {
            this.ligado = false;
            console.log('O carro foi desligado.');
        }
    },
    obterDetalhes: function () {
        console.log(`Este é um ${this.marca} ${this.modelo} ${this.ano} da cor ${this.cor}.`);
    }
}

console.log(`---------------------------------------------------`);
carro.ligar();
carro.desligar();
carro.desligar();
carro.ligar();
console.log('\n');
carro.obterDetalhes();
console.log(`---------------------------------------------------`);

Object.defineProperty(carro, 'placa', { enumerable: false });

for (let propriedade in carro) {
    const tipo = typeof carro[propriedade];

    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `${propriedade}: ${carro[propriedade]}`;
        console.log(texto);
    }
}
console.log(`---------------------------------------------------`);

const chavesEnumeraveis = Object.keys(carro);
console.log("\nChaves Enumeráveis do Carro:");
console.log(chavesEnumeraveis);

console.log(`---------------------------------------------------`);
console.log('Aplaca do carro é: ' + carro.placa);
console.log(`---------------------------------------------------`);