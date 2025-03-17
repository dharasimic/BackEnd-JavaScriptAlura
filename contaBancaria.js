const contaBancaria = {
    titular: 'Gabriel S.',
    saldo: 1000,
    depositar: function (valor) {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado, seu novo saldo é R$${this.saldo}`;
    },
    sacar: function (valor) {
        if (valor <= this.saldo)
            this.saldo -= valor;
        else
            console.log(`Saldo insuficiente.`);
    },
}

const cliente = {
    nome: 'João',
    conta: contaBancaria,
}

function mostrarSaldo(cliente) {
    console.log(`---------------------------------------------------`);
    console.log(`Olá, ${cliente.nome}!`);
    console.log(`Seu saldo atual é R$${cliente.conta.saldo}`);
    console.log(`---------------------------------------------------`);
}

mostrarSaldo(cliente);

cliente.conta.depositar(500);
cliente.conta.sacar(200);

console.log("\n");
console.log(`---------------------------------------------------`);
console.log(`Saldo atualizado: R$${cliente.conta.saldo}`);
console.log(`---------------------------------------------------`);