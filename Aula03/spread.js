const estudante = {
    nome: 'Fulano',
    idade: 32,
    cpf: '123.456.789-00',
    turma: 'A',
    bolsista: true,
    telefones: ['(11) 98765-4321', '(13) 98765-4321'],
    enderecos: [{
        rua: 'Washington Luiz',
        numero: '26',
        complemento: 'apto 101',
    },
    {
        rua: 'José Bonifácio',
        numero: '123',
        complemento: '',
    }]
};

function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0],
}

console.log(dadosEnvio);